import { AxiosPromise } from 'axios';
import { castDraft, Draft } from 'immer';
import {
  Actions,
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import {
  Reducer, useCallback, useDebugValue, useMemo, useReducer,
} from 'react';

const initialState: State<any> = {
  status: 'PENDING',
};

class RequestReducer<T> extends ImmerReducer<State<T>> {
  public setInProgress({ removeOldData }: { removeOldData: boolean }) {
    this.draftState.status = 'IN_PROGRESS';
    if (removeOldData) {
      this.draftState.data = undefined;
    }
  }

  public setFulfilled(data: T) {
    this.draftState.status = 'FULFILLED';
    this.draftState.data = castDraft(data);
  }

  public setRejected(e: Error) {
    this.draftState.status = 'REJECTED';
    this.draftState.error = e;
  }

  public updateState(cb: (draftState: Draft<State<T>>) => State<T> | void) {
    cb(this.draftState);
  }
}

function createActions<T>() {
  return createActionCreators<Type<RequestReducer<T>>>(RequestReducer);
}

function createReducer<T>() {
  return createReducerFunction<Type<RequestReducer<T>>>(
    RequestReducer,
    initialState,
  );
}

export function useAPI<TResponse, TPayload>(
  apiCallback:
  | ((payload: TPayload) => AxiosPromise<TResponse>)
  | (() => AxiosPromise<TResponse>),
) {
  useDebugValue(apiCallback, (cb) => `API call (${cb.name})`);

  const actions = useMemo(() => createActions<TResponse>(), []);
  const reducer = useMemo(() => createReducer<TResponse>(), []);

  const [state, dispatch] = useReducer<
  Reducer<State<TResponse>, Actions<Type<RequestReducer<TResponse>>>>
  >(reducer, initialState);

  const fetch = useCallback(
    (
      payload: TPayload,
      { removeOldData = false }: { removeOldData?: boolean } = {},
    ) => {
      dispatch(actions.setInProgress({ removeOldData }));
      (async () => {
        const res = await apiCallback(payload);
        dispatch(actions.setFulfilled(res.data));
      })().catch((e) => {
        dispatch(actions.setRejected(e));
      });
    },
    [actions, apiCallback],
  );

  return {
    state,
    fetch,
    updateState: (
      cb: (draftState: Draft<State<TResponse>>) => State<TResponse> | void,
    ) => dispatch(actions.updateState(cb)),
  } as const;
}

export type State<T> =
  | {
    status: 'PENDING'
    data?: T
    error?: Error
  }
  | {
    status: 'IN_PROGRESS'
    data?: T
    error?: Error
  }
  | {
    status: 'FULFILLED'
    data: T
    error?: Error
  }
  | {
    status: 'REJECTED'
    data?: T
    error: Error
  };

interface Type<T> extends Function {
  prototype: T

  new (...args: any[]): T
}

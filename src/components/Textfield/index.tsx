/* eslint-disable @typescript-eslint/no-shadow */
import React, {
  useMemo, useRef, useState, useEffect,
} from 'react';
import {
  Box, Button, CircularProgress, IconButton, OutlinedInput, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import { faCircleArrowLeft, faCircleArrowRight, faGear } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as NotFound } from '../../assets/img/illustration/NotFound.svg';
import SettingsModal from '../SettingsModal';

import examples from '../../utils/examples';
import { PromptResponse } from '../../utils/types';

import * as css from './css';

interface TextFieldProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  fetchOpenAi: (payload: { prompt: string; engine?: string }) => void;
  fetchStatus: string;
  setCurrentPrompt: React.Dispatch<React.SetStateAction<string>>;
  responses: PromptResponse[];
  setResponses: React.Dispatch<React.SetStateAction<PromptResponse[]>>
}

const TextField: React.FC<TextFieldProps> = ({
  scrollRef, fetchOpenAi, fetchStatus, setCurrentPrompt, responses, setResponses,
}) => {
  const requestText = useRef<HTMLSpanElement>(null);
  const requestResponse = useRef<HTMLSpanElement>(null);

  const [settingsModalOpen, setSettingsModalOpen] = useState(true);
  const [requestTextViewMore, setRequestTextViewMore] = useState(false);
  const [responseTextViewMore, setResponseTextViewMore] = useState(false);
  const [currentResponseShown, setCurrentResponseShown] = useState(0);
  const [requestTextHeight, setRequestHeight] = useState({
    scrollHeight: requestText?.current?.scrollHeight ?? 0,
    clientHeight: requestText?.current?.clientHeight ?? 0,
  });
  const [responseTextHeight, setResponseHeight] = useState({
    scrollHeight: requestResponse?.current?.scrollHeight ?? 0,
    clientHeight: requestResponse?.current?.clientHeight ?? 0,
  });

  const initialValues = useMemo(
    () => ({
      prompt: '',
    }),
    [],
  );

  const {
    values, handleChange, handleSubmit, setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        setCurrentPrompt(values.prompt);
        fetchOpenAi({ prompt: values.prompt });
      } catch (err: any) {
        if (err.message) {
          toast.error(err.message);
        }
      }
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    setRequestTextViewMore(false);
    setResponseTextViewMore(false);
    setRequestHeight({
      scrollHeight: requestText.current?.scrollHeight ?? 0,
      clientHeight: requestText?.current?.clientHeight ?? 0,
    });
    setResponseHeight({
      scrollHeight: requestResponse?.current?.scrollHeight ?? 0,
      clientHeight: requestResponse?.current?.clientHeight ?? 0,
    });
  }, [currentResponseShown, responses]);

  useEffect(() => {
    setCurrentResponseShown(0);
  }, [responses]);

  return (
    <Box>
      <Box css={css.TextfieldBox}>
        <Box css={css.RequestContainer}>
          <Typography variant="h2" css={css.TextfieldTitle}>
            Enter prompt
          </Typography>
          <Box css={css.PromptBox}>
            <OutlinedInput
              value={values.prompt}
              minRows={10}
              maxRows={30}
              multiline
              name="prompt"
              onChange={handleChange}
              css={css.PromptInput}
            />
            <Box css={css.ButtonBox}>
              <Box>
                <IconButton onClick={() => setSettingsModalOpen(true)} css={css.SettingsButton}>
                  <FontAwesomeIcon icon={faGear} />
                </IconButton>
                <Button
                  onClick={() => handleSubmit()}
                  disabled={fetchStatus === 'IN_PROGRESS' || !values.prompt.trim().length}
                  css={css.SubmitButton}
                >
                  {fetchStatus === 'IN_PROGRESS' ? <CircularProgress css={css.Progress} /> : <span>Submit</span>}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box css={css.ResponsesContainer}>
          <Box css={css.ResponsesTextContainer}>
            <Typography variant="h2" css={css.ResponsesTitle}>
              Responses
            </Typography>
            {!!responses.length && (
              <Typography variant="h2" css={css.ResponsesTitleCount}>
                {`${currentResponseShown + 1} / ${responses.length}`}
              </Typography>
            )}
          </Box>
          {!responses.length ? (
            <Box css={css.NotFoundContainer}>
              <NotFound />
              <Typography>No results yet!</Typography>
            </Box>
          ) : (
            <Box>
              <Box css={css.ResponseContainer}>
                <Box css={css.ResponseCard(!!requestTextViewMore || !!responseTextViewMore)}>
                  <Box css={css.RequestRow}>
                    <Typography css={css.RequestRowTitle}>Prompt</Typography>
                    <Box>
                      <Typography ref={requestText} css={css.ResponseCardRequestText(requestTextViewMore)}>
                        {responses[currentResponseShown].prompt.trim()}
                      </Typography>
                      {requestTextHeight.scrollHeight! > requestTextHeight.clientHeight! && (
                      <Typography css={css.ViewMoreText} onClick={() => setRequestTextViewMore(!requestTextViewMore)}>
                        View
                          {' '}
                        {requestTextViewMore ? 'less' : 'more'}
                      </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: '38px' }} css={css.RequestRow}>
                    <Typography css={css.RequestRowTitle}>Response</Typography>
                    <Box>
                      <Typography ref={requestResponse} css={css.ResponseCardResponseText(responseTextViewMore)}>
                        {responses[currentResponseShown].response.trim()}
                      </Typography>
                      {responseTextHeight.scrollHeight! > responseTextHeight.clientHeight! && (
                      <Typography
                        css={css.ViewMoreText}
                        onClick={() => setResponseTextViewMore(!responseTextViewMore)}
                      >
                        View
                        {' '}
                        {responseTextViewMore ? 'less' : 'more'}
                      </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box css={css.ArrowContainer}>
                <IconButton
                  onClick={() => setCurrentResponseShown(
                    currentResponseShown === 0 ? responses.length - 1 : currentResponseShown - 1,
                  )}
                  css={css.ArrowIcon}
                >
                  <FontAwesomeIcon icon={faCircleArrowLeft} />
                </IconButton>
                <IconButton
                  onClick={() => setCurrentResponseShown(
                    currentResponseShown === responses.length - 1 ? 0 : currentResponseShown + 1,
                  )}
                  css={css.ArrowIcon}
                >
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box css={css.ExamplesContainer}>
        <Typography variant="h2" css={css.ExamplesTitle}>
          Examples
        </Typography>
        <Box css={css.ExamplesWrapper}>
          {examples.map((example) => (
            <Box
              key={example.title}
              onClick={() => {
                scrollRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })!;
                setFieldValue('prompt', example.example);
              }}
              css={css.ExampleCard}
            >
              <Box css={css.IconBox(example.background)}>
                <FontAwesomeIcon icon={example.icon} />
              </Box>
              <Box css={css.ExampleCardTextContainer}>
                <Typography css={css.ExampleCardTitle}>{example.title}</Typography>
                <Typography css={css.ExampleCardParagraph}>{example.paragraph}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <SettingsModal
        open={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        setResponses={setResponses}
      />
    </Box>
  );
};

export default TextField;

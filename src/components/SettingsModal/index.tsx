/* eslint-disable @typescript-eslint/no-shadow */
import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import {
  Modal, Box, Typography, IconButton, FormControl, InputLabel, MenuItem, Select, OutlinedInput, Button,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import engines from '../../utils/engines';
import { AdditionalSettings, PromptResponse } from '../../utils/types';

import * as css from './css';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  setResponses: React.Dispatch<React.SetStateAction<PromptResponse[]>>
  additionalSettings: AdditionalSettings
  setAdditionalSettings: React.Dispatch<React.SetStateAction<AdditionalSettings>>
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  open, onClose, setResponses, additionalSettings, setAdditionalSettings,
}) => {
  const initialValues = useMemo<AdditionalSettings>(
    () => ({
      engine: additionalSettings.engine,
      temperature: additionalSettings.temperature,
      maxTokens: additionalSettings.maxTokens,
      frequencyPenalty: additionalSettings.frequencyPenalty,
      presencePenalty: additionalSettings.presencePenalty,
    }),
    [],
  );

  const {
    values, handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        setAdditionalSettings(values);
        onClose();
      } catch (err: any) {
        if (err.message) {
          toast.error(err.message);
        }
      }
    },
    enableReinitialize: true,
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box css={css.ModalContainer}>
        <Box css={css.CloseButtonContainer}>
          <IconButton onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </IconButton>
        </Box>
        <Typography css={css.ModalTitle} variant="h2">AI Configuration</Typography>
        <Box css={css.ModalBody}>
          <FormControl css={css.EngineSelectContol} fullWidth>
            <InputLabel sx={{ color: 'var(--typograghy-main)' }} id="engine-label">Select engine</InputLabel>
            <Select
              labelId="engine-label"
              label="Select engine"
              css={css.EngineSelect}
              name="engine"
              onChange={handleChange}
              value={values.engine}
            >
              {engines.map((engine) => (
                <MenuItem key={engine.name} css={css.EngineMenuItem} value={engine.name}>
                  <Typography variant="h2" css={css.EngineMenuItemTitle}>{engine.name}</Typography>
                  <Typography css={css.EngineMenuItemSubTitle}>{engine.text}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box css={css.InputRow}>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel id="name-label">
                Temperature
              </InputLabel>
              <OutlinedInput
                css={css.Input}
                autoComplete="off"
                label="Temperature"
                value={values.temperature}
                name="temperature"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel id="name-label">
                Maximum length
              </InputLabel>
              <OutlinedInput
                css={css.Input}
                autoComplete="off"
                label="Maximum length"
                value={values.maxTokens}
                name="maxTokens"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box css={css.InputRow}>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel id="name-label">
                Frequency penalty
              </InputLabel>
              <OutlinedInput
                css={css.Input}
                autoComplete="off"
                label="Frequency penalty"
                value={values.frequencyPenalty}
                name="frequencyPenalty"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel id="name-label">
                Presence penalty
              </InputLabel>
              <OutlinedInput
                css={css.Input}
                autoComplete="off"
                label="Presence penalty"
                value={values.presencePenalty}
                name="presencePenalty"
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Box css={css.ButtonsContainer}>
            <Button
              onClick={() => { setResponses([]); onClose(); }}
              css={css.ClearButton}
            >
              Clear results
            </Button>
            <Button onClick={() => handleSubmit()} css={css.SaveChangesButton}>Save changes</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingsModal;

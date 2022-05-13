/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Button,
  FormHelperText,
  Tooltip,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import engines from '../../utils/engines';
import { AdditionalSettings, PromptResponse } from '../../utils/types';

import * as css from './css';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  setResponses: React.Dispatch<React.SetStateAction<PromptResponse[]>>;
  additionalSettings: AdditionalSettings;
  setAdditionalSettings: React.Dispatch<React.SetStateAction<AdditionalSettings>>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onClose,
  setResponses,
  additionalSettings,
  setAdditionalSettings,
}) => {
  const initialValues = useMemo<AdditionalSettings>(
    () => ({
      engine: additionalSettings.engine,
      temperature: additionalSettings.temperature,
      maxTokens: additionalSettings.maxTokens,
      frequencyPenalty: additionalSettings.frequencyPenalty,
      presencePenalty: additionalSettings.presencePenalty,
    }),
    [open],
  );

  const validationSchema = yup.object({
    engine: yup.string().required('This field is required'),
    temperature: yup
      .number()
      .min(0, 'Minimum value is 0')
      .max(1, 'Maximum value is 1')
      .required('This field is required'),
    maxTokens: yup
      .number()
      .min(1, 'Minimum value is 0')
      .max(256, 'Maximum value is 256')
      .required('This field is required'),
    frequencyPenalty: yup
      .number()
      .min(0, 'Minimum value is 0')
      .max(2, 'Maximum value is 2')
      .required('This field is required'),
    presencePenalty: yup
      .number()
      .min(0, 'Minimum value is 0')
      .max(2, 'Maximum value is 2')
      .required('This field is required'),
  });

  const {
    values, handleChange, handleSubmit, touched, errors, resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setAdditionalSettings({
          engine: values.engine,
          temperature: +values.temperature,
          maxTokens: +values.maxTokens,
          frequencyPenalty: +values.frequencyPenalty,
          presencePenalty: +values.presencePenalty,
        });
        onClose();
      } catch (err: any) {
        if (err.message) {
          toast.error(err.message);
        }
      }
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    resetForm();
    document.body.style.overflow = open ? 'hidden' : 'auto';
    document.body.style.position = open ? 'relative' : 'auto';
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box css={css.ModalContainer}>
        <Box css={css.CloseButtonContainer}>
          <IconButton onClick={onClose}>
            <FontAwesomeIcon icon={faClose} />
          </IconButton>
        </Box>
        <Typography css={css.ModalTitle} variant="h2">
          AI Configuration
        </Typography>
        <Box css={css.ModalBody}>
          <FormControl css={css.EngineSelectContol} fullWidth>
            <InputLabel sx={{ color: 'var(--typograghy-main)' }} id="engine-label">
              Select engine
            </InputLabel>
            <Tooltip title="The engine, which will generate the result of your prompt." placement="top" arrow enterTouchDelay={0} leaveTouchDelay={5000}>
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
                    <Typography variant="h2" css={css.EngineMenuItemTitle}>
                      {engine.name}
                    </Typography>
                    <Typography css={css.EngineMenuItemSubTitle}>{engine.text}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </Tooltip>
          </FormControl>
          <Box css={css.InputRow}>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel error={touched.temperature && !!errors.temperature} id="name-label">
                Temperature
              </InputLabel>
              <Tooltip title="Controls randomness. Low = less random completions" placement="top" arrow enterTouchDelay={0} leaveTouchDelay={5000}>
                <OutlinedInput
                  css={css.Input}
                  autoComplete="off"
                  label="Temperature"
                  error={touched.temperature && !!errors.temperature}
                  value={values.temperature}
                  name="temperature"
                  type="number"
                  onChange={handleChange}
                />
              </Tooltip>
              {touched.temperature && !!errors.temperature && (
                <FormHelperText style={{ color: '#FF0C3E' }}>{errors.temperature}</FormHelperText>
              )}
            </FormControl>
            <FormControl error={touched.maxTokens && !!errors.maxTokens} css={css.EngineSelectContol}>
              <InputLabel id="name-label">Maximum length</InputLabel>
              <Tooltip title="Maximum number of characters to generate" placement="top" arrow enterTouchDelay={0} leaveTouchDelay={5000}>
                <OutlinedInput
                  css={css.Input}
                  autoComplete="off"
                  label="Maximum length"
                  error={touched.maxTokens && !!errors.maxTokens}
                  value={values.maxTokens}
                  name="maxTokens"
                  type="number"
                  onChange={handleChange}
                />
              </Tooltip>
              {touched.maxTokens && !!errors.maxTokens && (
                <FormHelperText style={{ color: '#FF0C3E' }}>{errors.maxTokens}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box css={css.InputRow}>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel error={touched.frequencyPenalty && !!errors.frequencyPenalty} id="name-label">
                Frequency penalty
              </InputLabel>
              <Tooltip title="Decreases engine's likehood to repeat answers" placement="top" arrow enterTouchDelay={0} leaveTouchDelay={5000}>
                <OutlinedInput
                  css={css.Input}
                  autoComplete="off"
                  label="Frequency penalty"
                  error={touched.frequencyPenalty && !!errors.frequencyPenalty}
                  value={values.frequencyPenalty}
                  name="frequencyPenalty"
                  type="number"
                  onChange={handleChange}
                />
              </Tooltip>
              {touched.frequencyPenalty && !!errors.frequencyPenalty && (
                <FormHelperText style={{ color: '#FF0C3E' }}>{errors.frequencyPenalty}</FormHelperText>
              )}
            </FormControl>
            <FormControl css={css.EngineSelectContol}>
              <InputLabel error={touched.presencePenalty && !!errors.presencePenalty} id="name-label">
                Presence penalty
              </InputLabel>
              <Tooltip title="Increases number of topics engine raises" placement="top" arrow enterTouchDelay={0} leaveTouchDelay={5000}>
                <OutlinedInput
                  css={css.Input}
                  autoComplete="off"
                  label="Presence penalty"
                  error={touched.presencePenalty && !!errors.presencePenalty}
                  value={values.presencePenalty}
                  name="presencePenalty"
                  type="number"
                  onChange={handleChange}
                />
              </Tooltip>
              {touched.presencePenalty && !!errors.presencePenalty && (
                <FormHelperText style={{ color: '#FF0C3E' }}>{errors.presencePenalty}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box css={css.ButtonsContainer}>
            <Button
              onClick={() => {
                setResponses([]);
                onClose();
              }}
              css={css.ClearButton}
            >
              Clear results
            </Button>
            <Button onClick={() => handleSubmit()} css={css.SaveChangesButton}>
              Save changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingsModal;

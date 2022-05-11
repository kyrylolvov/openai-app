/* eslint-disable @typescript-eslint/no-shadow */
import React, { useMemo, useState } from 'react';
import {
  Box, Button, IconButton, Menu, MenuItem, OutlinedInput, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import examples from '../../utils/examples';

import * as css from './css';
import engines from '../../utils/engines';

interface TextFieldProps {
  scrollRef: React.RefObject<HTMLDivElement>
  theme: string
}

const TextField: React.FC<TextFieldProps> = ({ scrollRef, theme }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const initialValues = useMemo(
    () => ({
      prompt: '',
    }),
    [],
  );

  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (err: any) {
        if (err.message) {
          console.log(err.message);
        }
      }
    },
    enableReinitialize: true,
  });

  console.log(values);

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
              <Button onClick={() => handleSubmit()} disabled={isSubmitting} css={css.SubmitButton}>Submit</Button>
              <IconButton
                aria-controls={anchorEl ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={anchorEl ? 'true' : undefined}
                onClick={handleClick}
                css={css.ArrowButton}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </IconButton>
              <Menu
                data-theme={theme}
                css={css.EngineMenu}
                id="basic-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {engines.map((engine) => (
                  <MenuItem css={css.EngineMenuItem} onClick={handleClose}>
                    <Typography css={css.EngineMenuItemHeader}>{engine.name}</Typography>
                    <Typography css={css.EngineMenuItemText}>{engine.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h2" css={css.ResponsesTitle}>
            Responses
          </Typography>
        </Box>
      </Box>
      <Box css={css.ExamplesContainer}>
        <Typography variant="h2" css={css.ExamplesTitle}>
          Examples
        </Typography>
        <Box css={css.ExamplesWrapper}>
          {examples.map((example) => (
            <Box
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
    </Box>
  );
};

export default TextField;

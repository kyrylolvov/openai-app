/* eslint-disable @typescript-eslint/no-shadow */
import React, { useMemo } from 'react';
import {
  Box, Button, OutlinedInput, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import examples from '../../utils/examples';

import * as css from './css';

const TextField: React.FC = () => {
  const initialValues = useMemo(
    () => ({
      prompt: '',
    }),
    [],
  );

  const {
    values,
    handleChange,
    // handleSubmit,
    // isSubmitting,
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
              <Button css={css.SubmitButton}>Submit</Button>
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
            <Box onClick={() => setFieldValue('prompt', example.example)} css={css.ExampleCard}>
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

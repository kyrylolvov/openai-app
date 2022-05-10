import React from 'react';
import {
  Box, Button, OutlinedInput, Typography,
} from '@mui/material';

import * as css from './css';

const TextField: React.FC = () => (
  <Box css={css.TextfieldBox}>
    <Box>
      <Typography variant="h2" css={css.TextfieldTitle}>
        Enter prompt
      </Typography>
      <Box css={css.PromptBox}>
        <OutlinedInput
          rows={10}
          multiline
          maxRows={20}
          css={css.PromptInput}
        />
        <Box css={css.ButtonBox}>
          <Button css={css.SubmitButton}>Submit</Button>
        </Box>
      </Box>
    </Box>
    <Box>
      <Typography variant="h2" css={css.ExamplesTitle}>
        Examples
      </Typography>
    </Box>
  </Box>
);

export default TextField;

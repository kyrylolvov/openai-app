import React from 'react';
import {
  Box,
} from '@mui/material';

import * as css from './css';

import data from '../../data.json';

const Cards: React.FC = () => {
  console.log(data);

  return (
    <Box css={css.MainContainer}>
      <Box css={css.CardsContainer}>Cards</Box>
    </Box>
  );
};

export default Cards;

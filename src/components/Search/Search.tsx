import React, { useState } from 'react';
import {
  Box, InputBase, FormControlLabel, Checkbox, Button,
} from '@mui/material';

import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';

import * as css from './css';

const Search: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked !== undefined) setChecked(event.target.checked);
  };

  return (
    <Box css={css.MainContainer}>
      <Box css={css.SearchContainer}>
        <SearchIcon />
        <InputBase css={css.SearchInput} placeholder="Filter by title, companies, expertise…" />
      </Box>
      <Box css={css.LocationContainer}>
        <LocationIcon />
        <InputBase css={css.SearchInput} placeholder="Filter by location..." />
      </Box>
      <Box css={css.ButtonContainer}>
        <FormControlLabel
          checked={checked}
          css={css.CheckboxControl(checked)}
          control={(<Checkbox onChange={handleChange} />)}
          label={window.innerWidth > 1400 ? 'Full Time Only' : 'Full Time'}
        />
        <Button css={css.SearchButton}>Search</Button>
      </Box>
    </Box>
  );
};

export default Search;

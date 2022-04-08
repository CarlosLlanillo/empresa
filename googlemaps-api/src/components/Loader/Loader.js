import React from 'react';
import { Box } from '@material-ui/core';
import { ActionProgressReport } from '@snc/ui';

export const Loader = () => {
  return (
    <Box height={1} display="flex" justifyContent="center" alignItems="center">
      <ActionProgressReport />
    </Box>
  );
};

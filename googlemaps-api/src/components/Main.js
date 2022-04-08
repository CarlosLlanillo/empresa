import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import { Header } from 'components/Header/Header';
import { Router } from 'components/Router/Router';

export default function Main() {
  const classes = useStyles();

  return (
    <Box className={classes.background} width={1} height={1} display="flex" flexDirection="column">
      <Box display="block">
        <Header />
      </Box>
      <Box mt={2} />
      <Container maxWidth={false} className={classes.mainContainer}>
        <Box className={classes.background} height={1} display="flex" flexDirection="column">
          <Box height={1} flexGrow={1}>
            <Router />
          </Box>
        </Box>
      </Container>
      <Box mb={2} />
    </Box>
  );
}

const useStyles = makeStyles({
  background: {
    backgroundColor: '#e3e3e3',
  },
  mainContainer: {
    width: '100%',
    flexGrow: 1,
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    backgroundColor: '#e3e3e3',
  },
});

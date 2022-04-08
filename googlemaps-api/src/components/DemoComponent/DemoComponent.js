import React from 'react';
import { Box, Button, Container, Typography, useTheme } from '@material-ui/core';
import { useGetCountries } from 'api/generated/mf/country';
import { i18n } from 'lang/i18n';

export const DemoComponent = () => {
  const theme = useTheme();
  const addressesTypes = useGetCountries({ enabled: false });

  return (
    <Container style={{ height: '100%' }}>
      <Box height={0.5} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography>Primary color is: {theme.palette.primary.main}</Typography>
        <Button
          color="primary"
          variant="contained"
          disabled={addressesTypes.isLoading}
          onClick={() => addressesTypes.refetch()}
        >
          {addressesTypes.isLoading ? i18n.loading : i18n.fetchItems}
        </Button>
        {addressesTypes.data && addressesTypes.data.map((item) => <Typography key={item.id}>{item.name}</Typography>)}
      </Box>
    </Container>
  );
};

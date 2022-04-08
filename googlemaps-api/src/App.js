import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EmiConfigProvider } from '@snc/emi-config';
import { RootErrorBoundary } from '@snc/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import Main from 'components/Main';
import { ThemeProvider } from 'components/Theme/ThemeProvider';
import { Router } from 'components/Router/Router';
import { Header } from 'components/Header/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const App = () => {
  return (
    <RootErrorBoundary>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <EmiConfigProvider>
          <ThemeProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Main />
              {/* <Header />
              <Router /> */}
            </BrowserRouter>
          </ThemeProvider>
        </EmiConfigProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </RootErrorBoundary>
  );
};

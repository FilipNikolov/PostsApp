import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PageRouter from './core/page-router/PageRouter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageRouter />
    </QueryClientProvider>
  );
}

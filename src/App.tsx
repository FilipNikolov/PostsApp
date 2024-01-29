import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageRouter from './core/route/PageRouter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageRouter />
    </QueryClientProvider>
  );
}

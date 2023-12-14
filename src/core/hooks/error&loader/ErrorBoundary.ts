import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  function Error() {
    const error = useRouteError();
    console.log(error);
  }
};

export default ErrorBoundary;

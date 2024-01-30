import React, { useEffect, useRef } from 'react';

const messageComponent = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
): React.FC<P> => {
  const WithLogging: React.FC<P> = (props: P) => {
    const hasLoggedRef = useRef(false);
    
    useEffect(() => {
      if (!hasLoggedRef.current) {
        console.log(`Hello from ${componentName}`);
        hasLoggedRef.current = true;
      }
    }, [componentName]);

    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

export default messageComponent;
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

















// import React, { useEffect } from 'react';
// import { WithComponentLoggingHOC } from './types';

// const withComponentLogging: WithComponentLoggingHOC = (WrappedComponent) => {
//   const WithLogging: React.FC<any> = (props) => {
//     const { componentName, ...restProps } = props;

//     useEffect(() => {
//       console.log(`Hello from ${componentName}`);
//     }, [componentName]);

//     // eslint-disable-next-line react/jsx-props-no-spreading
//     return <WrappedComponent {...restProps} />;
//   };

//   return WithLogging;
// };

// export default withComponentLogging;
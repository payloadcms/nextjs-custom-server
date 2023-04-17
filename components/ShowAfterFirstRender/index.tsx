import * as React from 'react';

export const ShowAfterFirstRender:React.FC = (props) => {
  const { children } = props;
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={{ opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
};

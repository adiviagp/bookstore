import React from 'react';

type Props = {
  noPadding?: boolean;
};
const Container: React.FC<Props> = (props) => {
  return <section className="container mx-auto">{props.children}</section>;
};

export default Container;

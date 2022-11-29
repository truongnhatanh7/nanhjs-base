import React from 'react';

type Props = {
  title: string;
  children: JSX.Element[] | JSX.Element | string
}

export const Tab: React.FC<Props> = ({ children }) => {
  return <div>
    {children}
  </div>
}


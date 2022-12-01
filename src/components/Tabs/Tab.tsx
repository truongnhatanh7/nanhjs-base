import React from 'react';

export type TabProps = {
  title: string;
  children: JSX.Element[] | JSX.Element | string
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>
    {children}
  </div>
}


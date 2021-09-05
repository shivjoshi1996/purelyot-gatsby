import React from 'react';
import GlobalStyles from '../globalStyles';
import Navigation from '../components/Navigation';
import Typography from './Typography';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navigation />
      {children}
    </>
  );
}

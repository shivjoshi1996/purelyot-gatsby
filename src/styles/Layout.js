import React from 'react';
import GlobalStyles from '../globalStyles';
import Navigation from '../components/Navigation';
import Typography from './Typography';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

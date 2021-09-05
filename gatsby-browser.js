import React from 'react';
import Layout from './src/styles/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

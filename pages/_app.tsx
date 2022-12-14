import React from 'react';
import { AppProps } from 'next/app';
import '../global.css';
import Navbar from '../components/navbar/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
  
}
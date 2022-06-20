import React from 'react';
import NextHead from 'next/head';

class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <title>Consignas fotográficas</title>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="description" content="Consignas fotográficas" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#521945"></meta>
        <meta
          property="og:url"
          content="https://www.consignasfotograficas.com"
        />
        <meta property="og:type" content="app" />
        <meta property="og:title" content="Consignas fotográficas" />
        <meta
          property="og:description"
          content="Proyecto colaborativo de consignas fotográficas"
        />
        <link rel="stylesheet" href="https://use.typekit.net/amq7kpd.css" />
      </NextHead>
    );
  }
}

export default Head;

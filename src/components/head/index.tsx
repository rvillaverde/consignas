import React from "react";
import NextHead from "next/head";

class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <title>Consignas fotográficas</title>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="description" content="Consignas fotográficas" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/amq7kpd.css" />
      </NextHead>
    );
  }
}

export default Head;

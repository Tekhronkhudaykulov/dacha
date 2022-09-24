import React from "react";
import { Helmet } from "react-helmet";

const HelmetReact = ({ name, description }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta name={description} content="Helmet application" />
    </Helmet>
  );
};

export default HelmetReact;

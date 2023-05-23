"use Client"; // Error components must be Client components

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    // log the errror to an error reporting service
    console.error(error);
  }, [error]);

  return <div>error</div>;
};

export default error;

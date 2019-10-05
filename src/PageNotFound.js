import React from 'react';

export default function PageNotFound(props) { 
  return (
    <h3>
      The URL http://localhost:3000{props.location.pathname} was not found.
    </h3>
  );
}
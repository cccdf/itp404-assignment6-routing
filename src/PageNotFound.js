import React from 'react';

export default function PageNotFound(props) { 
  console.log(props);
  return (
    <h3>
      The URL http://localhost:3000{props.location.pathname} was not found.
    </h3>
  );
}
import React from 'react';

const Error = ({ info }) => {
  return (
    <div className="my-20 text-center text-lg flex flex-col gap-5">
      <p>Ooppss.. Something went wrong!</p>
      <p>{info}</p>
    </div>
  );
};

export default Error;

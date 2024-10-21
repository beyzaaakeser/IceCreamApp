import React, { useEffect, useState } from 'react';
import api from '../../api';
import TrendButton from './TrendButton';
import Loader from '../loader/Loader';
import Error from '../error/Error';

const List = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/iceCreams')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(isLoading, data, error);

  return (
    <div className="mt-7 lg:mt-[120px]">
      <TrendButton />

      {isLoading ? <Loader /> : !error ? <Error info={error} /> : data && <div>data</div>}
    </div>
  );
};

export default List;

import React, { useEffect, useState } from 'react';
import api from '../../api';
import TrendButton from './TrendButton';
import Loader from '../loader/Loader';
import Error from '../error/Error';
import Card from '../card';


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

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        data && (
          <div className='mt-8 grid lg:grid-cols-2 gap-4 lg:gap-8'>
            {data.map((item,index) => (
              <div>
                <Card item={item} key={index}/>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default List;

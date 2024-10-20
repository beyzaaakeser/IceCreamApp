import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../api';

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
      <div className="flex justify-end ">
        <button
          className=" relative flex items-center gap-2 text-black text-[20px]  lg:text-[24px]  
        font-semibold bg-white rounded-full px-4 pr-12 py-1 hover:bg-white/75 transition"
        >
          Trending
          <img
            className="absolute end-0 bottom-1 size-11"
            src="/fire.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default List;

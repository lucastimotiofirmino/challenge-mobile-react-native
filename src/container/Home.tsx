import React, {useEffect, useState} from 'react';
import HomeComponent from '../components/Home/Home';
import store from '../store/index';
import {setCharacters} from '../store/slices/characters';
import api from '../utils/api';

const HomeContainer: React.FC = () => {
  const [u, setU] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    const {characters} = store.getState();
    setIsLoading(true);
    await api
      .get('/v1/public/characters', {
        params: {
          orderBy: 'name',
          offset: characters?.offset + characters?.count,
        },
      })
      .then(res => {
        if (res.data.code === 200) {
          const {offset, total, count, results} = res.data?.data;
          const newValue = {
            offset,
            total,
            count,
            data: characters.data.concat(results),
          };
          store.dispatch(setCharacters(newValue));
        }
      })
      .catch(err => {
        console.log('error request', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadMore();
    store.subscribe(() => {
      const {characters} = store.getState();
      setU(characters?.data);
    });
  }, []);

  return (
    <HomeComponent characters={u} loadMore={loadMore} isLoading={isLoading} />
  );
};

export default HomeContainer;

import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import React from 'react'

const useFavorites = () => {
    const {data, error, isLoading, mutate} = useSWR('/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
  return {
    data,error,isLoading,mutate
  }
}

export default useFavorites
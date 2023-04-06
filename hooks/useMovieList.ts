import React from 'react'
import  useSWR  from 'swr'
import fetcher from '@/lib/fetcher'

const useMovieList = () => {
const {data , error, isLoading} = useSWR("/api/movie", fetcher ,{
  revalidateOnFocus: false,
  revalidateIfStale: false,
  revalidateOnReconnect: false,
});
return{
    data,
    error,
    isLoading
}

}

export default useMovieList
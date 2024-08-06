import React, { useState, useEffect } from 'react'
import MediaItem from '../components/MediaItem'

const Home = () => {
  const [movies, setMovies] = useState()
  const [tvShows, setTvShows] = useState()

  useEffect(() => {
    fetchTrendMovies()
    fetchTrendTvShows()
  }, [])

  const fetchTrendMovies = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  const fetchTrendTvShows = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTvShows(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='w-full flex justify-between'>
      <MediaItem />
    </div>
  )
}

export default Home

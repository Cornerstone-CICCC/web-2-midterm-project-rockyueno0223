import MediaWrapper from '../components/MediaWrapper'

const Home = ({ movies, tvShows }) => {
  return (
    <div className='w-full flex flex-col'>
      <MediaWrapper type={'Movies'} mediaData={movies} />
      <MediaWrapper type={'TV Shows'} mediaData={tvShows} />
    </div>
  )
}

export default Home

import MediaWrapper from '../components/MediaWrapper'

const Home = ({ movies, tvShows, searchInput }) => {
  return (
    <div className='w-full flex flex-col pt-4 pb-16'>
      {searchInput && (
        <div className='w-full text-left text-lg pl-6 mt-4'>Keywords: {searchInput}</div>
      )}
      <MediaWrapper type={'Movies'} mediaData={movies} />
      <MediaWrapper type={'TV Shows'} mediaData={tvShows} />
    </div>
  )
}

export default Home

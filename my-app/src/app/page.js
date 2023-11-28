import Hero from './components/hero/hero'
import CustomFilter from './components/customFilter/customFilter'
import SearchBar from './components/searchBar/serachBar'
export default function Home() {
  return (
    <>
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className="home__text-container">
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title={"fuel"}/>
          <CustomFilter title={"year"}/>
        </div>
      </div>
      </div>
    </>
  )
}

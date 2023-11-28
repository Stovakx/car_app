
import Hero from "./components/hero/hero";
import CustomFilter from "./components/customFilter/customFilter";
import SearchBar from "./components/searchBar/searchBar";
import CarCard from "./components/carCard/carCard";
import { fetchCars } from "./utils";
export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel : searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <>
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title={"fuel"} />
            <CustomFilter title={"year"} />
          </div>
        </div>
        {!isDataEmpty ? (<div className="home__cars-wrapper">
          {allCars?.map((car)=>(
            <CarCard car={car}/>
          ))}
        </div>):(
          <div className="hemo_error-container">
            <h2 className="text-balck text-xl">
              Oops, no results.
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

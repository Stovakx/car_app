import Hero from "./components/hero/hero";
import CustomFilter from "./components/customFilter/customFilter";
import SearchBar from "./components/searchBar/searchBar";
import CarCard from "./components/carCard/carCard";
import ShowMore from "./components/showMore/showMore";
import { fetchCars } from "./utils";
import { fuels, yearsOfProduction } from "./constants";

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
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
            <CustomFilter title={"fuel"} options={fuels} />
            <CustomFilter title={"year"} options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>
            <ShowMore
              pageNumber={(searchParams.pageNumber || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="hemo_error-container">
            <h2 className="text-balck text-xl">Oops, no results.</h2>
          </div>
        )}
      </div>
    </>
  );
}

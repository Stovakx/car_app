import axios from "axios";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2cb54aabc3msh2c46baf7c6c489ap1ca6f4jsn244c05a3a30e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    contentType: "application/json",
    headers: headers,
  };

  try {
    const response = await axios(options);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
  }
}

/*  nemám api pro obrázky automobilů, vše je placený
export async function generateCarImageUrl(car, angle) { 

  try {
      
    } catch (error) {
      
    }
 }
 */
export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; //in dollars
  const mileagerFactor = 0.1; //rate per mile driven
  const ageFactor = 0.05; //rate per year of vehicle

  const mileageRate = city_mpg * mileagerFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = Math.floor(basePricePerDay + mileageRate + ageRate);

  return rentalRatePerDay;
};

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarService } from "../../Services";
import CarDetailsCarousel from "./CarDetailsCarousel";
import CarDetailsTable from "./CarDetailsTable";
import CarOwnerDetails from "./CarOwnerDetails";

import "./CarDetails.css";
import Car from "../Home/Car";

export default function CarDetails() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { selectedLanguageId } = useSelector((state) => state.languagereducer);

  async function fetchdata() {
    setIsLoading(true);
    try {
      const result = await CarService.GetCarDetails(id, selectedLanguageId);
      console.log(result);
      setCarDetails(result);
    } catch (error) {
      console.error("Error fetching car details:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [id, selectedLanguageId]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-gray-200 flex align-center justify-center">
      <div className="w-75 flex flex-col  px-5 p-3">
        <div className="flex">
          <div className=" pt-5 pb-5 flex flex-col sm:w-3/5 lg:w-4/6">
            <div className="pb-0 rounded-xl bg-slate-700 border-8 border-slate-700">
              {carDetails.images &&
              carDetails.images.$values &&
              carDetails.images.$values.length > 0 ? (
                <CarDetailsCarousel images={carDetails.images.$values} />
              ) : (
                <p>No images available</p>
              )}
            </div>
            <p
              className="text-lg mt-3 px-2"
              dangerouslySetInnerHTML={{ __html: carDetails.description }}
            ></p>
            <div className="flex flex-wrap mt-2">
              {carDetails.features.$values.map((feature, index) => (
                <p className="rounded-md bg-white px-3 py-1 m-2">{feature}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center flex-grow  overflow-hidden mx-3">
            <CarOwnerDetails carDetails={carDetails} />
            <CarDetailsTable carDetails={carDetails} />
          </div>
        </div>
        <div className="bg-slate-700 my-4 rounded-sm">
          <p className="text-white p-3 text-xl">Bənzər elanlar</p>
        </div>
        <div className="flex flex-wrap justify-around">
          {carDetails.relatedCars.$values.map((car, index) => (
            <Car key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { getPerson } from "../../../../utils/movie.service";
import Loading from "@/components/loading";

const PersonComponentPage = ({ params }: any) => {
  const [personDetails, setPersonDetails] = useState<any | null>(null);
  const fallbackImage = "../src/img/images.png";

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const details = await getPerson(params.id);
        setPersonDetails(details);
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };
    fetchPersonDetails();
  }, [params.id]);

  const gender =
    personDetails?.gender === 2
      ? "Male"
      : personDetails?.gender === 1
      ? "Female"
      : "Unknown";
  const genderString = gender?.toString() ?? "Unknown";

  return (
    <div className='p-4 flex flex-col md:flex-row items-center bg-base-300 py-10'>
      {personDetails ? (
        <>
          <div className='w-full md:w-1/3 pr-6 mb-4 md:mb-0'>
            {personDetails.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w400${personDetails.profile_path}`}
                alt={`${personDetails.name} profile`}
                className='rounded-lg shadow-xl max-w-full'
              />
            ) : (
              <img
                src={fallbackImage}
                alt={`${personDetails.name} profile`}
                className='rounded-lg shadow-xl max-w-full'
              />
            )}
          </div>

          <div className='w-full md:w-2/3'>
            <h1 className='text-3xl font-semibold mb-4 text-orange-500'>
              {personDetails.name}
            </h1>
            <h1 className='font-bold'>Biography:</h1>
            {personDetails.biography ? (
              personDetails.biography
                .split("\n\n")
                .map((paragraph: any, index: any) => (
                  <p
                    key={index}
                    className='text-base-content text-sm py-2 pr-4'
                  >
                    {paragraph}
                  </p>
                ))
            ) : (
              <p className='text-base-content'>
                There's no biography for {personDetails.name}.
              </p>
            )}
            <h1 className='font-bold'>Known For:</h1>
            <p className='text-sm text-base-content py-2'>
              {personDetails.known_for_department}
            </p>
            <h1 className='font-bold'>Birthday:</h1>
            <p className='text-sm text-base-content py-2'>
              {personDetails.birthday
                ? `Born on ${personDetails.birthday}`
                : "N/A"}
            </p>
            <h1 className='font-bold'>Also Known As:</h1>
            <p className='text-sm text-base-content py-2 '>
              {personDetails.also_known_as.length
                ? personDetails.also_known_as.join(", ")
                : "N/A"}
            </p>
            <h1 className='font-bold'>Gender:</h1>
            <p className='text-sm text-base-content py-2 '>{genderString}</p>
            <h1 className='font-bold py-2 '>Homepage:</h1>
            {personDetails.homepage && (
              <p className='text-sm font-bold text-orange-500 py-2 '>
                <a
                  href={personDetails.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {personDetails.homepage ? (
                    personDetails.homepage
                  ) : (
                    <div>no website.</div>
                  )}
                </a>
              </p>
            )}
            <h1 className='font-bold'>Place of Birth:</h1>
            <p className='text-sm text-base-content py-2 '>
              {personDetails.place_of_birth
                ? personDetails.place_of_birth
                : "N/A"}
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PersonComponentPage;

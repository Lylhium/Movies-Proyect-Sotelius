import React from "react";
import Link from "next/link";

const CreditModal = ({
  IMG_BASE_URL,
  credit,
}: {
  IMG_BASE_URL: string;
  credit: any;
}) => {
  if (!credit || !credit.cast) {
    return null;
  }

  const castToDisplay = credit.cast.slice(0, 11);
  const fallbackImage = "./img/images.png";

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4 pt-8'>Top Billed Cast</h1>
      <div className='flex -mx-1 overflow-x-auto '>
        {castToDisplay.map((castMember: any) => (
          <div
            key={castMember.id}
            className='w-96 px-2 sm:w-96 md:w-96 lg:w-96 mb-4'
          >
            <div className='card bg-base-100 shadow-xl text-base-content '>
              <figure>
                <Link href={`/person/${castMember.id}`}>
                  <img
                    src={
                      castMember.profile_path
                        ? IMG_BASE_URL + castMember.profile_path
                        : fallbackImage
                    }
                    alt={castMember.name}
                    className='w-full h-full rounded-t-lg object-cover '
                  />
                </Link>
              </figure>
              <div className='card-body px-1 '>
                <div
                  className='bg-base-100 text-base-content'
                  title={castMember.name}
                >
                  {castMember.name.split(" ").slice(0, 2).join(" ")}
                </div>
                <p className='text-sm text-gray-500 '>
                  as {castMember.character}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditModal;

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

  const castToDisplay = credit.cast.slice(0, 9);

  return (
    <div className=''>
      <div>
        <h1 className='text-2xl font-semibold mb-4'>Top Billed Cast</h1>
        <div className='flex -mx-1 overflow-x-auto'>
          {castToDisplay.map((castMember: any) => (
            <div
              key={castMember.id}
              className='w-96 px-2 sm:w-96 md:w-96 lg:w-96 mb-4'
            >
              <div className='card bg-base-100 shadow-xl text-black '>
                <figure>
                  <Link href={`/person/${castMember.id}`}>
                    <img
                      src={IMG_BASE_URL + castMember.profile_path}
                      alt={castMember.name}
                      className='w-full h-full rounded-t-lg object-cover'
                    />
                  </Link>
                </figure>
                <div className='card-body px-1'>
                  <p className='font-bold text-black ' title={castMember.name}>
                    {castMember.name.length > 18
                      ? `${castMember.name.substring(0, 16)}..`
                      : castMember.name}
                  </p>
                  <p className='text-sm text-black '>
                    as {castMember.character}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditModal;

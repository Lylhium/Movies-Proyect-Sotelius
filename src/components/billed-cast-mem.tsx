import Link from "next/link";

export function BilledCastMem({
  IMG_BASE_URL,
  credit,
}: {
  IMG_BASE_URL: string;
  credit: any;
}) {
  if (!credit || !credit.cast) {
    return null;
  }

  const castToDisplay = credit.cast.slice(0, 9);
  const fallbackImage = "utils/img/fallbackimg.jpg";

  return (
    <div className='pt-4'>
      <h2 className='font-semibold text-2xl mb-4'>Top Billed Cast</h2>
      <div className='max-w-full mx-auto p-4 rounded-lg overflow-x-auto'>
        <div className='flex space-x-4 justify-start'>
          {castToDisplay.map((castMember: any) => (
            <div className='flex-shrink-0 w-48' key={castMember.id}>
              <Link href={`/person/${castMember.id}`}>
                <img
                  alt={castMember.name}
                  className='object-cover w-full h-60 rounded-lg'
                  height={300}
                  src={
                    castMember.profile_path
                      ? IMG_BASE_URL + castMember.profile_path
                      : fallbackImage
                  }
                  style={{
                    aspectRatio: "200/300",
                    objectFit: "cover",
                  }}
                  width={200}
                />
                <h3 className='font-semibold text-lg mt-2'>
                  {castMember.name.split(" ").slice(0, 2).join(" ")}
                </h3>
              </Link>
              <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                as {castMember.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

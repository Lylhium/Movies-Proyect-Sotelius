import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function App({ movie }: any) {
  const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <Card className='py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>Movie</p>
        <h4 className='font-bold text-large'>{movie.title}</h4>
        <small>{movie.overview}</small>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={IMG_BASE_URL + movie.poster_path}
          width={220}
        />
      </CardBody>
    </Card>
  );
}

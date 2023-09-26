import React from "react";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export default function App({ movie }: any) {
  return (
    <Card className='py-4'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>Movie</p>

        <h4 className='font-bold text-large'>{movie.title}</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src='https://nextui-docs-v2.vercel.app/images/album-cover.png'
          width={270}
        />
      </CardBody>
    </Card>
  );
}

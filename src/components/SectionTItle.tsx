'use client';
import React from 'react';
import { Separator } from './ui/separator';


const SectionTItle = ({ title }: { title: string }) => {
  return (
    <div>
      <h2 className=' text-neutral-800 font-bold text-[16px] md:text-[20px] '>{title}</h2>
      <Separator className='my-2' />
    </div>
  )
}

export default SectionTItle
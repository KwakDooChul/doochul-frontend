'use client';
import React from 'react';
import SectionTItle from './../../../components/SectionTItle';

const page = () => {

  return (
    <main>
      <section>

        {/* 트레이너 리스트 */}

        <ul className='flex md:flex-row flex-start flex-wrap py-2 gap-[2%] gap-y-4'>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
          <li className='h-[300px] w-[49%] bg-red-200'></li>
        </ul>

        <div className='h-[3000px]'></div>
      </section>
    </main>
  )
}

export default page 
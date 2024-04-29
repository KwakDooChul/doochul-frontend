'use client';
import React from 'react';
import TrainerList from '../../../containers/pt/TrainerList';

const page = () => {

  return (
    <main>
      <section>

        {/* 트레이너 리스트 */}

        <TrainerList/>

        <div className='h-[3000px]'></div>
      </section>
    </main>
  )
}

export default page 
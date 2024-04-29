import React from 'react';
import TrainerCard from './TrainerCard';

const TrainerList = () => {
  return (
    <ul className="flex md:flex-row flex-start py-4 gap-y-4 md:gap-[2rem] flex-wrap">
      {
        Array(20).fill(null).map((trainer, idx) => {
          return <TrainerCard key={idx} />
        })
      }
    </ul>
  );
};

export default TrainerList;

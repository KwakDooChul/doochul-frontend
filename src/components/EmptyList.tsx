import { cn } from '@/lib/utils';
import React from 'react';


const EmptyList = ({text = '빈 목록입니다.', height = '150px'} : {text? : string, height? : string}) => {
  return (
    <div className={cn("flex items-center justify-center", `h-[${height}]`)}>
      <span className="text-neutral-400">{text}</span>
    </div>
  );
};

export default EmptyList;

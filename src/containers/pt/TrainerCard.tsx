import React from 'react';
import { Separator } from '@/components/ui/separator';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';


const TrainerCard = () => {
  return (
    <li className="border border-black w-full rounded-lg overflow-hidden max-w-[calc(100vw-2rem)] lg:w-[calc((100%-4rem)/3)]">
      {/* 강사 사진 */}
      <div className="relative w-full h-[150px] z-[-1] mb-2">
        <Image
          fill
          src={'https://via.placeholder.com/150'}
          alt="임시이미지"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* 강사 이름, 평점, 리뷰 */}
      <div className="mb-2 px-2">
        <div className="flex items-center">
          <span className=" text-[20px] mr-2">소환사닉네임</span>
          <span className=" text-neutral-400">강사</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <FaStar color="orange" className="mr-1" />
            <span>3.8 (23)</span>
          </div>
          <div className="text-neutral-500">
            리뷰 <span>2</span>개
          </div>
        </div>
      </div>

      <Separator />
      
      {/* 강사 인사말 */}
      <div className="bg-neutral-50 p-2 h-[150px]">
        <span className="text-[14px] text-clip trncate break-all line-clamp-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          et nostrum dolorum reprehenderit itaque hic Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet ex in maxime aperiam velit mollitia
          reiciendis quas laboriosam voluptas veniam, doloribus repellendus.
          Sunt inventore fugit maiores aut. Sit, ratione aliquam! lorem
        </span>
      </div>

      <Separator />

    {/* 개설 강의 목록? */}
      <ul className="flex  overflow-x-auto p-2 gap-2 flex-nowrap w-full]">
        <li className="h-[50px] w-[150px] flex-shrink-0 bg-neutral-500 rounded-md"></li>
        <li className="h-[50px] w-[150px] flex-shrink-0  bg-neutral-500 rounded-md"></li>
        <li className="h-[50px] w-[150px] flex-shrink-0  bg-neutral-500 rounded-md"></li>
        <li className="h-[50px] w-[150px] flex-shrink-0  bg-neutral-500 rounded-md"></li>
      </ul>
    </li>
  );
};

export default TrainerCard;

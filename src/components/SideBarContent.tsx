'use client'
import React from 'react';
import Link from 'next/link';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';






const SideBarContent = () => {

  const pathName = usePathname();

  return (
    <div className=''>

      {/* page navigation */}
      <ul className='flex flex-col gap-2 p-4'>
        <li className={cn('rounded-lg hover:bg-neutral-200', pathName==='/' && 'bg-neutral-200')}>
          <Link href='/' className='flex gap-2 p-2 items-center'>
            <IoMdHome size={24} />
            <span>홈</span>
          </Link>
        </li>
        <li className={cn('rounded-lg hover:bg-neutral-200', pathName==='/shorts' && 'bg-neutral-200')}>
          <Link href='/shorts' className='flex gap-2 p-2 items-center'>
            <SiYoutubeshorts size={24} />
            <span>Shorts</span>
          </Link>
        </li>
        <li className={cn('rounded-lg hover:bg-neutral-200', pathName.split('/')[1]==='pt' && 'bg-neutral-200')}>
          <Link href='/pt/findpt' className='flex gap-2 p-2 items-center'>
            <FaChalkboardTeacher size={24} />
            <span>PT</span>
          </Link>
        </li>
        <li className={cn('rounded-lg hover:bg-neutral-200', pathName==='/board' && 'bg-neutral-200')}>
          <Link href='/board' className='flex gap-2 p-2 items-center'>
            <MdOutlineChat size={24} />
            <span>게시판</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarContent
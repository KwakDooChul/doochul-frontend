'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdSearch } from 'react-icons/io';
import { CiLogin } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import IconButton from './buttons/IconButton';
import { useRouter } from 'next/navigation';
import DrawerSideBar from './DrawerSideBar';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { push } = useRouter();

  return (
    <>
      <div className="w-full h-header flex items-center fixed top-0 left-0 bg-neutral-100 shadow-sm z-10">
        <div className="w-full flex justify-between items-center px-2 md:px-8">
          <IconButton
            onClick={() => setDrawerOpen(true)}
            theme="light"
            className="md:hidden px-2"
            icon={<RxHamburgerMenu size={26} />}
          />

          <DrawerSideBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

          {/* 로고 (루트로 navigate) */}
          <Link
            href={'/'}
            className="w-[120px] h-[80px] md:w-[150px] md:h-[100px] relative"
          >
            <Image src={'/next.svg'} fill alt="로고" />
          </Link>

          {/* 전적 검색창 */}
          <form action="#" className="hidden md:flex flex-1 max-w-[50%]">
            <div className="border-black bg-white px-4 flex-1 h-[45px] flex items-center rounded-l-2xl">
              <input
                type="text"
                className=" bg-transparent w-full focus:outline-none"
                placeholder="전적 검색"
              />
            </div>
            <IconButton
              onClick={() => {}}
              type="submit"
              icon={<IoMdSearch size={24} />}
              className="rounded-l-none rounded-r-2xl"
            />
          </form>

          {/* 헤더 버튼 영역 */}
          <div className="flex">
            {/* md 사이즈 이상에서만 보이는 버튼 */}
            <IconButton
              className="hidden md:flex"
              onClick={() => {
                push('/login');
              }}
              icon={<CiLogin size={24} />}
              buttonText="로그인"
            />

            {/* md 사이즈 아래에서만 보이는 버튼 */}
            {/* <IconButton className='md:hidden px-2' onClick={()=>{}} theme='light' icon={<CiLogin size={26} />} /> */}
            <IconButton
              className="md:hidden px-2"
              onClick={() => {}}
              theme="light"
              icon={<IoMdSearch size={26} />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

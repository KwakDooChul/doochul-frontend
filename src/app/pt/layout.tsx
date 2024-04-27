'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Layout = ({ children }: { children: React.ReactNode }) => {

  const { push } = useRouter();

  return (
    <main className='px-4'>
      <Tabs defaultValue="findpt">
        <div className='fixed w-full h-[50px] bg-neutral-100 top-[100px] left-0 md:left-[240px] flex items-center'>
          <TabsList className='w-full justify-start items-center md:w-[500px]'>
            <TabsTrigger className='w-1/2 h-[50px]' onClick={() => { push('/pt/findpt') }} value='findpt' >트레이너</TabsTrigger>
            <TabsTrigger className='w-1/2 h-[50px]' onClick={() => { push('/pt/mypt') }} value='mypt'>나의 PT</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className='mt-[50px]'></div>

      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout
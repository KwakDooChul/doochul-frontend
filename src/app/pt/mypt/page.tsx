import React from 'react'
import { Separator } from '@/components/ui/separator'
import EmptyList from '../../../components/EmptyList';

const page = () => {
  return (
    <div className='py-2'>
      <section>
        <h3 className=' font-bold'>구독 PT</h3>
        <EmptyList text='구독중인 PT가 없어요' height='150px'/>
      </section>
      <Separator className='mb-2'/>
      

      <section>
        <h3 className='font-bold'>진행중인 PT</h3>
        <EmptyList text='진행중인 PT가 없어요' height='150px'/>
      </section>
      <Separator className='mb-2'/>

      <section>
        <h3 className=' font-bold'>이전 PT 내역</h3>
        <EmptyList text='PT 내역이 없어요.' height='150px'/>
      </section>
  
    </div>
  )
}

export default page
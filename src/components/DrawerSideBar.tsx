import React from 'react';
import { IoMdClose } from "react-icons/io";
import IconButton from './buttons/IconButton';
import {Drawer,DrawerContent} from '@/components/ui/drawer';
import SideBarContent from './SideBarContent';

interface DrawerSideBarProps {
    drawerOpen : boolean;
    setDrawerOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerSideBar:React.FC<DrawerSideBarProps> = ({drawerOpen, setDrawerOpen}) => {

    const handleCloseDrawer = () => setDrawerOpen(false);
    
  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction='left'>
        <DrawerContent className='w-[300px] h-full'>
          <div className='flex justify-end mb-4'>
            <IconButton 
              icon={<IoMdClose size={28} color='#AAAAAA'/>} 
              theme='light' 
              onClick={handleCloseDrawer}
              className='px-2'
            />
          </div>
          <SideBarContent isDrawer handleCloseDrawer={handleCloseDrawer}/>
        </DrawerContent>
    </Drawer>
  )
}

export default DrawerSideBar
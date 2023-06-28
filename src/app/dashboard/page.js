import React from 'react'
import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import NavItem from '@/components/NavItem'
import Tab from '@/components/Tab'
import Image from 'next/image'
import {FaPlus, FaSearch, FaInbox, FaStar, FaExclamationCircle, FaTrash} from 'react-icons/fa'

function page() {

    const active = ' text-purple'

  return (
    <>
    <Tab/>
    <main className='mx-[2%] my-[2%]'>
    <div className='flex flex-row mt-[16px]'>
        <div className='w-[20%]'>
            <div className='px-[10%] my-[10%] ml-[-10%]'>
            <Button>
                
                <FaPlus className='text-[15px]'/>
                <span className='text-[15px] ml-[8px] my-auto'>Compose</span>
            </Button>
            </div>
            <IconButton>
                <FaInbox className={'text-[20px]' + active}/>
                <span className={'text-[17px] ml-[8px] my-auto text-purple' + active}>Inbox</span>
            </IconButton>
            <IconButton>
                <FaStar className='text-[20px]'/>
                <span className='text-[17px] ml-[8px] my-auto'>Starred</span>
            </IconButton>
            <IconButton>
                <FaExclamationCircle className='text-[20px]'/>
                <span className='text-[17px] ml-[8px] my-auto'>Spam</span>
            </IconButton>
            <IconButton>
                <FaTrash className='text-[20px]'/>
                <span className='text-[17px] ml-[8px] my-auto'>Bin</span>
            </IconButton>
            
        </div>
            
        <div>
            <div>
                <span className='font-worksans font-semibold text-[24px]'>Inbox</span>
                <div className='flex flex-row space-x-4 my-[1.5vh]'>
                    <span className='font-worksans text-[14px]'>500 messages</span>
                    <div className='rounded w-[6px] h-[6px] bg-[#ffffff] self-center'></div>
                    <span className='font-worksans text-[14px]'>6 unread</span>
                </div>
            </div>
            <div className='mb-[2vh]'>
                <InputField/>
            </div>
            <InboxCard/>
            <InboxCard/>
            <InboxCard/>
            <InboxCard/>
            <InboxCard/>
            <InboxCard/>    
        </div>
    </div>
    </main>
    </>
  )
}

export default page
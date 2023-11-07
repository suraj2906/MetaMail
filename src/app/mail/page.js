import React from 'react'
import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InputField from '@/components/InputField'
import Attachment from '@/components/Attachment'
import Image from 'next/image'
import {FaPlus, FaSearch, FaInbox, FaStar, FaExclamationCircle, FaTrash, FaRegClock, FaRegFolder, FaReply, FaReplyAll, FaPaperclip} from 'react-icons/fa'
import { AiOutlineInfoCircle } from "react-icons/ai";


function page() {

    const active = ' text-purple'

  return (
    <>
    <main className='mx-[2%] my-[2%] font-worksans'>
    <div className='flex flex-row mt-[16px]'>
        <div className='w-[12%] border-r-[0.5px] border-[#3D3D3D] h-screen'>
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
            
        <div className='pl-[2%] w-[100%]'>
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
            <div>
                <div className='flex flex-row mt-[3vh] border-b-[0.5px] border-[#3D3D3D] py-[2vh]'>
                    <Image className='rounded-full' width={38} height={38} src={'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg'}/>
                    <div className='justify-center flex flex-col mx-[1vw]'>
                        <p className='font-worksans text-[16px] font-semibold'>Suraj Shah</p>
                        <p className='text-[11px]'><span className='text-[#888888]'>From:    </span>surajshah@metamail.com</p>
                    </div>
                    <p className='justify-center flex flex-col ml-auto text-[11px]'>24th Dec, 2022, 09:48PM</p>
                </div>
                    <div className='flex flex-row border-b-[0.5px] border-[#3D3D3D] space-x-[4vw] py-[3vh] pl-[4vw]'>
                    <FaRegClock className='text-[20px] text-[#888888]'/>
                    <FaRegFolder className='text-[20px] text-[#888888]'/>
                    <AiOutlineInfoCircle className='text-[20px] text-[#888888]'/>
                    <FaStar className='text-[20px] text-[#888888]'/>
                    <FaTrash className='text-[20px] text-[#888888]'/>
                    <FaReplyAll className='text-[20px] text-[#888888]'/>
                    <FaReply className='text-[20px] text-[#888888]'/>
                </div>
                <div className='ml-[3%] mt-[2%]'>
                    <p className='text-[24px] font-medium'>Regarding the new recruits</p>
                    <p className='text-[12px] mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in dapibus magna. Nulla non purus fringilla, dapibus dui et, hendrerit sapien. Pellentesque vulputate tincidunt quam feugiat convallis. Aliquam auctor suscipit ipsum sed sollicitudin. Vivamus molestie dignissim erat ut molestie. Proin sed nulla erat. Nam at viverra risus.
                    <br/>
                    <br/>
                    Donec quis pulvinar mi. Integer mauris neque, commodo vitae nunc venenatis, sodales convallis erat. Donec pharetra lacinia neque in commodo. Fusce consectetur risus a dolor tempus consequat. Suspendisse eu ex sed neque viverra mattis. Vestibulum fringilla facilisis nisi at lobortis. Sed porttitor elit ac ex accumsan condimentum.</p>
                
                
                <div className='my-[4vh]'>
                    <p><span className='font-semibold text-[20px]'>Attachments</span><span className='text-[16px] text-purple underline ml-[2vw]'>Download All</span></p>
                    <div className='flex flex-row space-x-[16px] mt-[10px]'>
                       <Attachment filename = 'Official Document' filesize='2.4MB'/>
                       <Attachment filename = 'Official Document' filesize='2.4MB'/>
                       <Attachment filename = 'Official Document' filesize='2.4MB'/>
                    </div>
                </div>
                </div>

            </div>    
        </div>
    </div>
    </main>
    </>
  )
}

export default page
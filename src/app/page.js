import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import NavItem from '@/components/NavItem'
import Tab from '@/components/Tab'
import Image from 'next/image'
import {FaPlus, FaSearch} from 'react-icons/fa'


export default function Home() {
  return (
      <main>
      <Tab />
    <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] left-[70%] top-[150%] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
    <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] left-[50%] top-[50%] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
    <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] left-[30%] top-[250%] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
    <div className='flex flex-col items-center h-screen w-[100%] bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative flex justify-center pointer-events-none'>
  <span className='text-5xl h-[20%] leading-10 text-white font-worksans font-bold opacity-70 pointer-events-none'>Meta Mail</span>
   <div className='flex flex-row items-center h-[10%]'>
    <div className='items-center justify-center flex mx-[30px] h-[70px] w-[70px] bg-[#D1D5DB] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>Tasks</div>  
    <div className='items-center justify-center flex mx-[30px] h-[70px] w-[70px] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>  
    <div className='items-center justify-center flex mx-[30px] h-[70px] w-[70px] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>  
    <div className='items-center justify-center flex mx-[30px] h-[70px] w-[70px] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>   
  </div> 
  
  

</div>
<div className='justify-center items-center h-screen bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative pointer-events-none'>
    <h1 className='mx-[10%] pt-[10%] text-4xl text-white font-worksans font-bold'>The Most Secure Email</h1>
    <div className='mx-[10%] mt-[20px] flex-row flex'>
      <p className='text-xl text-[#9098a2] font-normal font-worksans w-[40%] text-[1.1rem]'>Hosted on the blockchain, this MetaMail serves as the perfect Email service, when security is concerned. Each mail sent or recieved is encrypted and secure. Privacy is at the top</p>
      <p className='mr-[20px] text-7xl'>GIF PLACEHOLDER</p>
    </div>
  </div>
  <div className='justify-center items-center h-screen bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative pointer-events-none'>
    <div className='ml-[50%]'>
    <h1 className='mx-[10%] pt-[20%] text-4xl text-white font-worksans font-bold'>The Most Secure Email</h1>
    <div className='mx-[10%] mt-[20px] flex-row flex'>
      <p className='text-xl text-[#9098a2] font-normal font-worksans w-[80%] text-[1.1rem]'>Hosted on the blockchain, this MetaMail serves as the perfect Email service, when security is concerned. Each mail sent or recieved is encrypted and secure. Privacy is at the top</p>
    </div>
    </div>
  </div>
     </main>
  )
}


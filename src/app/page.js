import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import NavItem from '@/components/NavItem'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FaPlus, FaSearch } from 'react-icons/fa'


export default function Home() {
  return (
    <main>

      <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] md:left-[70%] md:top-[130vh] top-[180vh] left-[50%] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
      <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] left-[50%] top-[50vh] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
      <div className='hover:scale-90 origin-center bg-gradient-to-r from-[#6c22bd] via-[#8b25bb] via-[#a52bb9] via-[#bc34b7] via-[#d040b5] via-[#e645a5] via-[#f55195] via-[#ff6188] via-[#ff796e] via-[#ff965b] via-[#f5b255] to-[#e1cd60] md:left-[30%] left-[50%] md:top-[220vh] top-[295vh] rounded-[20px] -skew-y-12 -translate-y-1/2 -translate-x-1/2 scale-75 h-[50%] w-[50%] absolute -z-2 transition-transform duration-300'></div>
      <div className='flex flex-col items-center h-[350vh] w-[100%] bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative flex pointer-events-none'>
        <span className='text-5xl h-[10vh] leading-10 text-white font-worksans font-bold opacity-70 pointer-events-none pt-[35vh]'>Meta Mail</span>
        <div className='flex flex-row items-center pt-[15vh]'>
          <div className='items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] bg-[#D1D5DB] rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>Tasks</div>
          <div className='items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>
          <div className='items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>
          <div className='items-center justify-center flex sm:mx-[30px] mx-[4vw] sm:h-[70px] sm:w-[70px] h-[15vw] w-[15vw] hover:bg-[#D1D5DB] pointer-events-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-opacity-20'>Tasks</div>
        </div>
        <h1 className='mx-[10%] md:pt-[50vh] pt-[25vh] sm:text-4xl text-3xl text-white font-worksans font-bold w-[80%] text-center md:text-left'>The Most Secure Email</h1>
        <div className='mx-[10%] mt-[20px] flex-row flex'>
          <p className='md:text-xl sm:text-3xl text-xl text-[#9098a2] font-normal font-worksans w-[100%] md:w-[40%] text-[1.1rem]'>Hosted on the blockchain, this MetaMail serves as the perfect Email service, when security is concerned. Each mail sent or recieved is encrypted and secure. Privacy is at the top</p>

        </div>
        <div className='md:ml-[50%]'>
          <h1 className='mx-[10%] md:pt-[55vh] min-[375px]:pt-[75vh] pt-[70vh] sm:text-4xl text-3xl text-white font-worksans font-bold w-[80%] text-center md:text-left'>The Most Secure Email</h1>
          <div className='mx-[10%] mt-[20px] flex-row flex'>
            <p className='md:text-xl sm:text-3xl text-xl text-[#9098a2] font-normal font-worksans w-[100%] md:w-[80%] text-[1.1rem]'>Hosted on the blockchain, this MetaMail serves as the perfect Email service, when security is concerned. Each mail sent or recieved is encrypted and secure. Privacy is at the top</p>
          </div>
        </div>

      </div>
      {/* <div className='justify-center items-center h-screen bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative pointer-events-none'> */}
      <div>

      </div>
      {/* <div className='justify-center items-center h-screen bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative pointer-events-none'> */}
      <div>

      </div>
    </main>
  )
}


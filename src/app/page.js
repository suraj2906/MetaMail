import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import NavItem from '@/components/NavItem'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import GradientView from './HomeView/GradientView'
import FeaturesView from './HomeView/FeaturesView'
import TranslucentButton from '@/components/TranslucentButton'
import BannerView from './HomeView/BannerView'
import { FaPlus, FaSearch } from 'react-icons/fa'


export default function Home() {
  return (
    <main>

      <GradientView />
      <div className='flex flex-col items-center h-[350vh] w-[100%] bg-gray-300 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-20 z-2 relative flex pointer-events-none'>
        <BannerView/>
        <FeaturesView/>
      </div>
    </main>
  )
}


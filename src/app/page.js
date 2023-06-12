import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import NavItem from '@/components/NavItem'
import Image from 'next/image'
import {FaPlus, FaSearch} from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <NavItem foreImage={<FaPlus className='text-purple' size={21} />}>
        About
      </NavItem>
      <NavItem foreImage={<FaPlus className='text-purple' size={21} />}>
        About
      </NavItem>
      <NavItem foreImage={<FaPlus className='text-purple' size={21} />}>
        About
      </NavItem>
    </main>
  )
}

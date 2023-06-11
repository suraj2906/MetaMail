import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import InboxCard from '@/components/InboxCard'
import InputField from '@/components/InputField'
import Image from 'next/image'
import {FaPlus, FaSearch} from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <InputField foreImage={<FaSearch size={18} />}/>
    </main>
  )
}

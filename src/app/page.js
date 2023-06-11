import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import Image from 'next/image'
import {FaPlus} from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <IconButton>
        <FaPlus size={15} />
      </IconButton>
    </main>
  )
}

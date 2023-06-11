import Button from '@/components/Button'
import Image from 'next/image'
import {FaPlus} from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <Button foreImage={<FaPlus size={14} />}>Send</Button>
    </main>
  )
}

import React from 'react'
import TranslucentButton from '@/components/TranslucentButton'

function BannerView() {
  return (
    <section className='pt-[30vh] flex-col items-center flex justify-center'>
        <span className='text-5xl h-[10vh] leading-10 text-white font-worksans font-bold opacity-70 pointer-events-none'>Meta Mail</span>
        <div className='flex flex-row items-center pt-[15vh]'>
          <TranslucentButton title = 'Tasks' active = {true} />
          <TranslucentButton title = 'Tasks' active = {false} />
          <TranslucentButton title = 'Tasks' active = {false} />
          <TranslucentButton title = 'Tasks' active = {false} />
        </div>
    </section>
  )
}

export default BannerView
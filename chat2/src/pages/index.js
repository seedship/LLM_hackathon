import Image from 'next/image'
import { Message } from '../components/message'
import React from 'react'

export default function Home() {
  return (
    <main className=" h-screen items-center justify-between p-24 bg-dc-gray">
      <div className="flex justify-between w-full max-w-5xl items-center font-mono text-sm lg:flex mb-8">
        <p className="w-[200px] left-0 top-0 flex justify-center items-center border-b border-gray-300  pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> Upload your CSV and goal
        </p>
        <div className="flex  items-center justify-center">
            By &nbsp;
            <Image
              src="/logo.svg"
              className="white"
              width={100}
              height={24}
              color='white'
              priority
            />

        </div>
      </div>

      <div className="w-full justify-center">
        <input type="file" className=" h-72 left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit   lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"/> 
        <br></br>
        <Message />
      </div>

    </main>
  )
}

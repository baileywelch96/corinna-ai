import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const user = await currentUser()

    if (user) redirect('/')
  return (
    <div className='h-screen w-full flex justify-center'>
        <div className='w-[600px] lg:w-full flex flex-col items-start p-6'>
            <Image src="/images/logo.png" alt='logo' style={{ width: '20%', height: 'auto'}} width={0} height={0} />
            {children}
        </div>
    </div>
  )
}

export default Layout
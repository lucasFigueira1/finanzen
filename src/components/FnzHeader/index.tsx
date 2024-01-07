"use client"
import { appColors } from '@/helpers/constants'
import { headingsFont } from '@/helpers/fonts'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode;
  logoColor?: string;
}

const FnzMainHeader = ({ children, logoColor = appColors.Teal }: Props) => {
  return (
    <header className='flex flex-row justify-between px-3 py-4'>
      <h2 style={{ color: logoColor, fontWeight: '700' }} className={`${headingsFont.className} text-2xl`}>
        <Link href={'/'}>
          FinanZen
        </Link>
      </h2>

      <>
        {children}
      </>
    </header>
  )
}

export default FnzMainHeader
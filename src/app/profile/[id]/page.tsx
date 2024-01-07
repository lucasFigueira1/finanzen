import React from 'react'

export default function UserProfile({ params }: any) {
  const { id } = params
  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2 bg-slate-900'>
      <h1>Profile</h1>
      <p className='text-xl'>Welcome back to Finanzen <i>{id}</i> !</p>
    </div>
  )
}

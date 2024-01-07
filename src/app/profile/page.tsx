"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react'
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const router = useRouter()

  const onLogout = async () => {
    try {
      await axios.get('/api/user/logout')
      toast.success('Logout success')
      router.push('/login')

    } catch (error: any) {
      console.log('Logout error: ', error.message)
      toast.error(error.message)
    }
  }

  useMemo(() => {
    console.log('re rendered profile page')
    const getAuth = async () => {
      const res = await axios.get('/api/user/auth')
      console.log(res)
    }
    getAuth()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2 bg-slate-900'>
      <h1>Profile</h1>
      <button
        onClick={onLogout}
        className='px-4 py-2 bg-red-500 rounded-lg text-white font-bold'
      >
        Logout
      </button>
    </div>
  )
}

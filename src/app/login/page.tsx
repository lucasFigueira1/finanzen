"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useLoading } from '@/helpers/hooks/useLoading'
import toast from 'react-hot-toast'
import FnzMainHeader from '@/components/FnzHeader'

export default function LoginPage() {
  const router = useRouter()
  const { isLoading, setLoading } = useLoading()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // maybe adding for login and signup a state that manages de btn disabled based on if the fields are empty or not


  const onLogin = async () => {
    // Mostrar mensaje de error cuando sea necesario.
    try {
      setLoading(true)
      const res = await axios.post('/api/user/login', user)
      console.log('Login response: ', res.data)
      toast.success('Login success')
      router.push('/profile')

    } catch (error: any) {
      toast.error(error.message)
      console.log('Login error: ', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <FnzMainHeader />
      {/* <h1>Login</h1> */}

      <main
        className='flex flex-col justify-center items-center'
      // style={{ backgroundColor: 'rgba(169, 169, 169, 0.1)' }}
      >
        <div className='flex flex-col rounded-lg border border-gray-300 p-8 bg-transparent'>
          <label htmlFor='email'>email</label>
          <input
            className='text-black'
            id='email'
            type='text'
            placeholder='Email'
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor='password'>Password</label>
          <input
            className='text-black'
            id='password'
            type='password'
            placeholder='password'
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />

          <button
            disabled={isLoading}
            onClick={onLogin}
            className='border-white border-2 rounded-md mt-2'>
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>

          <span>
            No tienes cuenta?
            <Link className='text-center mt-2' href='/signup'>
              Registrate
            </Link>
          </span>
        </div>
      </main>
    </div>
  )
}
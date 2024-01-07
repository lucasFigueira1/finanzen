"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import FnzMainHeader from '@/components/FnzHeader'
import { appColors, shadows } from '@/helpers/constants'
import { headingsFont } from '@/helpers/fonts'
import LoadingScene from '@/components/LoadingScene'
import CustomInput from '@/components/CustomInput'

export default function SignupPage() {
  const router = useRouter()
  const [imageLoaded, setImageLoaded] = useState(false);
  const [user, setUser] = useState({
    username: '',
    // currency: '',
    email: '',
    password: '',
    // confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/oceantealwpp.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  const onSignup = async () => {
    try {
      setIsLoading(true)
      const res = await axios.post('/api/user/signup', user)
      console.log('Sign up response: ', res.data)
      router.push('/login')

    } catch (error: any) {
      toast.error(error.message)
      console.log('Sign up error: ', error.data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {imageLoaded
        ? (
          <div
            className='flex flex-col min-h-screen overflow-hidden'
            //  style={{ backgroundColor: appColors.Teal }}
            style={{
              backgroundImage: `url("/assets/oceantealwpp.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
            }}
          >
            <div className='bg-transparent' style={{ boxShadow: shadows.navbarShadow }}>
              <FnzMainHeader logoColor='#fff' />
            </div>

            <main className='flex flex-row self-center my-auto gap-10'>
              <div className='pr-8 w-[400px] gap-4 flex flex-col'>
                <h1 className={`${headingsFont.className} text-4xl font-bold text-start text-white`}>Registrate</h1>
                <p className={`${headingsFont.className}text-start text-white`}>Crea una cuenta para empezar a controlar tus gastos e ingresos</p>
              </div>

              <div
                style={{ border: '2px solid rgba(255, 255, 255, .2)', backdropFilter: 'blur(20px)', boxShadow: shadows.defaultContainerShadow }}
                className='flex flex-col rounded-[10px] p-10 bg-transparent w-[600px]'>

                {/* Despues cuando agregue RHF voy a mapear los input para tener un codigo clean */}
                <div className='flex flex-col gap-6'>
                  <CustomInput
                    onChangeInput={(e: any) => setUser({ ...user, username: e.target.value })}
                    value={user.username}
                    inputId='username'
                    inputType='text'
                    placeholder='Username'
                  />
                  <CustomInput
                    onChangeInput={(e: any) => setUser({ ...user, email: e.target.value })}
                    value={user.email}
                    inputId='email'
                    inputType='text'
                    placeholder='Email'
                  />

                  <CustomInput
                    onChangeInput={(e: any) => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    inputId='password'
                    inputType='password'
                    placeholder='Password'
                  />
                </div>

                <button
                  disabled={isLoading}
                  onClick={onSignup}
                  style={{ boxShadow: shadows.mainBtnShadow, color: "#1F2937" }}
                  className='bg-white text-[16px] font-semibold outline-none rounded-[40px] py-3 mt-4'
                >
                  {isLoading ? 'Cargando...' : 'Registrate'}
                </button>

                <Link
                  className='text-center text-white mt-2'
                  href='/login'>
                  Ya tengo una cuenta
                </Link>
              </div>
            </main>
          </div>
        )
        : (
          <LoadingScene />
        )}
    </>
  )
}
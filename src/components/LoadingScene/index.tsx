import { appColors } from '@/helpers/constants'
import React from 'react'

const LoadingScene = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 style={{ color: appColors.Teal }} className="text-4xl">Cargando...</h1>
    </div>
  )
}

export default LoadingScene
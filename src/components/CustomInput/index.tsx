import React from 'react'
import { borders } from '@/helpers/constants'
import styles from './styles.module.css'
import { Lock, CircleUserRound, AtSign } from 'lucide-react';

const CustomInput = (props: any) => {
  const { onChangeInput, value, inputId, inputType, placeholder } = props

  return (
    <input
      className={`text-white text-[16px] bg-transparent rounded-[40px] py-3 px-6 outline-none relative ${styles.input}`}
      style={{ border: borders.borderTransparent }}
      id={inputId}
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
    />
  )
}

export default CustomInput
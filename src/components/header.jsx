import React from 'react'
import { ButtonPrimary } from './button'

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-bold my-10">Majoo todo 🚀</h1>
        <ButtonPrimary text="Tambah task baru" icon={() => (<box-icon type="solid" name="plus-circle" color="white"></box-icon>)}/>
      </div>
  )
}

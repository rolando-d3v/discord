import React from 'react'
import css from './layout.module.css'
import Server from '../servidores/Server'

export default function LayoutDash() {
  return (
    <div  className={css.layout_content}  >
      <Server/>
    </div>
  )
}

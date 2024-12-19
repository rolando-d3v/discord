import React from 'react'
import css from './layout.module.css'
import Server from '../servidores/Server'
import InfoUser from '../info_user/InfoUser'
import ListCanales from '../list_canales/ListCanales'
import NameServer from '../name_server/NameServer'
import HeaderCanal from '../head_canal/HeaderCanal'
import ContentData from '../content_data/ContetData'
import ListUser from '../list_user/Listuser'
import CanalData from '../canal_data/CanalData'

export default function LayoutDash() {
  return (
    <div  className={css.layout_content}  >
      <Server/>
      <InfoUser/>
      <NameServer/>
      <ListCanales/>
      <HeaderCanal/>
      <ContentData/>
      <ListUser/>
      <CanalData/>
    </div>
  )
}

import css from './layout.module.css'
import Server from '../servidores/Server'
import InfoUser from '../info_user/InfoUser'
import ListCanales from '../list_canales/ListCanales'
import HeaderCanal from '../head_canal/HeaderCanal'
import ContentData from '../content_data/ContetData'
import ListUser from '../list_user/Listuser'
import { useState } from 'react'
import Head from '../head/Head'
// import CanalData from '../canal_data/CanalData'

export default function LayoutDash() {



  const [activeSide, setActiveSide] = useState(false)


  return (
    <div  className={css.layout_content}  >
      <Head/>
      <Server/>
      <InfoUser/>
      <ListCanales/>
      <HeaderCanal  activeSide={activeSide}  setActiveSide={setActiveSide}/>
      <ListUser activeSide={activeSide}  setActiveSide={setActiveSide}/>
      <ContentData/>
 
    </div>
  )
}

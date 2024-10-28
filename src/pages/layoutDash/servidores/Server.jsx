import React from "react";
import css from "./server.module.css";
import ButtonServer from "../buttom_server/ButtonServer";
import { data } from "../../../data/data";

export default function Server() {
  return (
    <div className={css.content}>
      <ButtonServer home />

      <div className={css.separador}></div>

      {
        data.server.map(serv =>  {
          return (
            <ButtonServer notificacion  serv={serv}  mensaje  />
          )
        }  )
      }
      {/* <ButtonServer />
      <ButtonServer notificacion  mensaje={3}   />
      <ButtonServer  />
      <ButtonServer  />
      <ButtonServer notificacion  mensaje={10}  />
      <ButtonServer /> */}
    </div>
  );
}

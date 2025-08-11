import css from "./server.module.css";
import ButtonServer from "../buttom_server/ButtonServer";
import { data } from "../../../data/data";

export default function Server() {
  return (
    <div className={css.content}>
      <ButtonServer home />

      <div className={css.separador}></div>

      {data.server.map((serv, index) => {
        return <ButtonServer key={index} notificacion serv={serv} mensaje />;
      })}
    </div>
  );
}

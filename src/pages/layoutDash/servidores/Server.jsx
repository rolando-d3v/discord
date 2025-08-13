import styles from "./server.module.css";
import ButtonServer from "../buttom_server/ButtonServer";
import { data } from "../../../data/data";

export default function Server() {
  return (
    <div className={styles.content}>
      <ButtonServer home />

      <div className={styles.separador}></div>

      {data.server.map((serv, index) => {
        return <ButtonServer key={index} serv={serv} mensaje />;
      })}
    </div>
  );
}

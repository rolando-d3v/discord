import React from "react";
import css from "./list.module.css";
import * as IconFa6 from "react-icons/fa6";
import * as IconMd from "react-icons/md";

export default function ListCanales() {
  return (
    <div className={css.list_content}>
      <div className={css.categoria}>
        <span> Texto </span>
        <IconFa6.FaPlus className={css.icon_add} />
      </div>

      <div className={css.canal_button}>
        <div>
          <IconFa6.FaHashtag   className={css.icon_hash}  />
          <span>Rolando dev </span>
        </div>

        <div>
          <IconMd.MdPersonAddAlt1  className={css.icon_add_user} />
        </div>
      </div>
      
      <div className={css.canal_button}>
        <div>
          <IconFa6.FaHashtag   className={css.icon_hash}  />
          <span>Rolando dev </span>
        </div>

        <div>
          <IconMd.MdPersonAddAlt1  className={css.icon_add_user} />
        </div>
      </div>
    </div>
  );
}

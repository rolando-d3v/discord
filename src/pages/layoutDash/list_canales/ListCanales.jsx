import css from "./list.module.css";
import * as IconFa6 from "react-icons/fa6";
import * as IconMd from "react-icons/md";
import { ImBullhorn } from "react-icons/im";
import banner from "../../../assets/icons/midudev.png";
// import banner from "../../../assets/icons/banner.png";

import icon from "../../../assets/icons/icon_d.png";
import { useEffect, useRef, useState } from "react";

const canales = [
  {
    id: 1,
    name: "📍⎮readme",
    icon: <ImBullhorn className={css.icon} />,
  },
  {
    id: 2,
    name: "🔥╏novedades",
    icon: <ImBullhorn className={css.icon} />,
  },
  {
    id: 3,
    name: "📹╏youtube",
    icon: <ImBullhorn className={css.icon} />,
  },
  {
    id: 4,
    name: "🤔╏cómo-acceder",
    icon: <IconFa6.FaHashtag className={css.icon} />,
  },
  {
    id: 5,
    name: "💬╏chat-general",
    icon: <IconFa6.FaHashtag className={css.icon} />,
  },
  {
    id: 6,
    name: "🥫╏salseos",
    icon: <IconFa6.FaFire className={css.icon} />,
  },
  {
    id: 7,
    name: "🤣╏memes-chistes-otros",
    icon: <IconFa6.FaHashtag className={css.icon} />,
  },
];

export default function ListCanales() {
  const [activeTopScroll, setActiveTopScroll] = useState(false);

  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      setActiveTopScroll(scrollElement.scrollTop);
      console.log("Scroll vertical (scrollTop):", scrollElement.scrollTop);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  console.log(activeTopScroll);

  return (
    <div className={css.list_content}>
      <div
        className={`${activeTopScroll < 40 ? css.bg_transparent : ""}  ${
          css.name_content
        }`}
      >
        <div className={css.div_name_server}>
          <img className={css.icon} src={icon} alt="icon" />
          <h5 className={css.title}>Python en Español</h5>
        </div>
        <IconFa6.FaAngleDown className={css.icon_down} />
      </div>

      {/* IMAGE BANNER */}
      <div

      style={{
        backgroundImage: `url(${banner})`,
      }}
        className={` ${css.div_banner}  ${
          activeTopScroll > 40 ? css.img_transparent : ""
        } `}
      >
        {/* <img className={css.img_banner} src={banner} alt="baner" /> */}
      </div>

      <div
        ref={scrollRef}
        className={`${css.lista_canales}`}
      >
        <div className={css.espacio}></div>

        <div className={css.contenido}>
          <div className={css.acceso}>
            <article className={css.text_icon}>
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={css.icon}
                  d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
                ></path>
              </svg>
              <span className={css.text}> Guia del servidor </span>
            </article>
          </div>
          <div className={css.acceso}>
            <article className={css.text_icon}>
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={css.icon}
                  d="M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z"
                ></path>
                <path
                  className={css.icon}
                  d="M2 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9Zm3.5 2a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z"
                ></path>
              </svg>
              <span className={css.text}> 8 eventos </span>
            </article>
          </div>
          <div className={css.acceso}>
            <article className={css.text_icon}>
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  className={css.icon}
                ></path>
                <path
                  d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z"
                  className={css.icon}
                ></path>
              </svg>
              <span className={css.text}> Canales y roles </span>
            </article>
            <span className={css.text_nuevo}> nuevo </span>
          </div>

          <div className={css.div_separador}></div>

          <div className={css.categoria}>
            <span> {"{ ℹ SERVIDOR } >"} </span>
          </div>

          {canales.map((canal) => (
            <div key={canal.id} className={css.canal_button}>
              <div className={css.div_icon_text}>
                {canal.icon}
                <span className={css.text}>{canal.name}</span>
              </div>

              <div>
                <IconMd.MdPersonAddAlt1 className={css.icon_add_user} />
              </div>
            </div>
          ))}
          <br />
          <div className={css.categoria}>
            <span> {"{ 🌟 PREMIUM } > "} </span>
          </div>
          {canales.map((canal) => (
            <div key={canal.id} className={css.canal_button}>
              <div className={css.div_icon_text}>
                {canal.icon}
                <span className={css.text}>{canal.name}</span>
              </div>

              <div>
                <IconMd.MdPersonAddAlt1 className={css.icon_add_user} />
              </div>
            </div>
          ))}

          <br />
          <div className={css.categoria}>
            <span> {"{ ⭐ COMUNIDAD } > "} </span>
          </div>
          {canales.map((canal) => (
            <div key={canal.id} className={css.canal_button}>
              <div className={css.div_icon_text}>
                {canal.icon}
                <span className={css.text}>{canal.name}</span>
              </div>

              <div>
                <IconMd.MdPersonAddAlt1 className={css.icon_add_user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

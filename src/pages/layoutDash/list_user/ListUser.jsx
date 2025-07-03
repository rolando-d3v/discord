
import css from "./list_user.module.css";

export default function ListUser() {
  return (
    <div className={css.list_user}>
      <div className={css.role}>Online - 8</div>
      <UserRow nickname={"Electron"} />
      <UserRow nickname={"Python"} isBot />
      <UserRow nickname={"Redux"} />
      <UserRow nickname={"React Query"} />

      <div className={css.role}>Offline - 18</div>
      <UserRow nickname={"Koala"} />
      <UserRow nickname={"React"} />
      <UserRow nickname={"Node"} isBot />
      <UserRow nickname={"Java"} />
      <UserRow nickname={"React native"} />
      <UserRow nickname={"PostgreSql"} />
      <UserRow nickname={"Mysql"} />
      <UserRow nickname={"MongoDB"} />
      <UserRow nickname={"Notion"} />
      <UserRow nickname={"Rolando D3v"} />
      <UserRow nickname={"Sqlite"} />
      <UserRow nickname={"Bun"} />
      <UserRow nickname={"Hono"} />
      <UserRow nickname={"Discord"} />
      <UserRow nickname={"Obsidian"} />
      <UserRow nickname={"Express"} />
      <UserRow nickname={"React Table"} />
    </div>
  );
}

const UserRow = ({ nickname, isBot }) => {
  return (
    <div className={css.user}>
      <div className={`${css.avatar} ${isBot ? css.bot : ""}   `} />
      <strong className={`${isBot ? css.bot : ""}  `}>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </div>
  );
};

import s from "./FriendListItem.module.css";
const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      <img className={s.img} src={avatar} alt='Avatar' width='48' />
      <p className={s.title}>{name}</p>
      <p className={isOnline ? s.text : s.textRed}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
export default FriendListItem;

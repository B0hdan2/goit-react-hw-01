import s from "./Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <section className={s.section}>
        <div className={s.div}>
          <img className={s.img} src={avatar} alt={tag} />
          <p className={s.title}>{username}</p>
          <p className={s.email}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.list}>
          <li className={s.item}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Profile;

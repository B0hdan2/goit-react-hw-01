// Завдання 1 - Профіль соціальної мережі
import Profile from "./components/Profile";
import userData from './userData.json';
// Завдання 2 - Список друзів
import FriendList from "./components/FriendList";
import friends from "./friends.json"

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends = {friends} />
    </>
  );
};
export default App
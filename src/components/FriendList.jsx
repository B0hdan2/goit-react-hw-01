import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {

  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

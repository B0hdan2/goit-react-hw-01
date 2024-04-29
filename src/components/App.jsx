// Завдання 1 - Профіль соціальної мережі
import Profile from "./Profile";
import userData from "../userData.json";
// Завдання 2 - Список друзів
import FriendList from "./FriendList";
import friends from "../friends.json";
// Завдання 3 - Історія транзакцій
import TransactionHistory from "./TransactionHistory";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile {...userData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;

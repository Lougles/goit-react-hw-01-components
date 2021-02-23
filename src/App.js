import React from 'react';
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/Friends";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transaction.json';


// import qwerty from "./paint.json";


const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        folowers={user.stats.followers}
        view={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />;
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transaction={transaction}
      />
    </div>
  );
};

export default App;
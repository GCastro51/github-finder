import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {

  const githubContext = useContext(GithubContext);
  //destructure state from context for easy use
  const { loading, users } = githubContext;

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        { /* List - loop through each user and send to UserItem to display */}
        {users.map(user => (
          // Pass user as prop to UserItem to use instead of state that was declared
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    )
  }
  
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users

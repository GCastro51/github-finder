import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Users

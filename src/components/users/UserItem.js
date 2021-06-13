import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// dont need export word in first component
// pass props if functional components 
// part 3: destructure props to get only what we need
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  // component level state
  // state = {
  //   id: 'id',
  //   login: 'mojombo',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //   html_url: 'https://github.com/mojombo'
  // }
    // destrcuture state so this.state is NOT needed - 2nd part, passed in user prop to use 
    // dont need this in a functional component
  //const { login, avatar_url, html_url} = props.user;

  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem

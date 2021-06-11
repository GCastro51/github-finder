import React, { Component } from 'react'


// dont need export word in first component
class UserItem extends Component {

  // component level state
  // state = {
  //   id: 'id',
  //   login: 'mojombo',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //   html_url: 'https://github.com/mojombo'
  // }
  
  render() {
    // destrcuture state so this.state is NOT needed - 2nd part, passed in user prop to use 
    const { login, avatar_url, html_url} = this.props.user;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    )
  }
}

export default UserItem

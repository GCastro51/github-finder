import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import Gists from '../gists/Gists';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos, gists, getUserGists } = githubContext;

  // Replaces ComponentMount
  // need to add to end paramters when you want it to run (will run infinite without). empty brackets will make run once
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    getUserGists(match.params.login);
    // eslint-disable-next-line
  }, []);
  // can ignore errors for dependencies (will infinite load w/ dependencies in brackets - add comment above to clear error. 

  const {
    name,
    avatar_url,
    company,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if(loading) return <Spinner></Spinner>

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable: {' '}
      {hireable ? (
        <i className="fas fa-check text-success" /> 
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} className="round-img" style={{ width: '150px' }} alt="" />
          <h1>{login}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (<Fragment>
              <h2>{name}</h2>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1" target="_blank">Visit GitHub Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>}
            </li>
            <li>
              {company && <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>}
            </li>
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <h2>Repos</h2>
      <Repos repos={repos} />
      <h2>Gists</h2>
      <Gists gists={gists} />
    </Fragment>
  )
}

export default User

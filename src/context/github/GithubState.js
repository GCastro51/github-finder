// Initital github state/actions, move stuff from app.js
// types (like in redux), 

import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import GithubReducer from './githubReducer';
// import types
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_GISTS
} from '../types';

let githubClientToken;

if(process.env.NODE_ENV !== 'production') {
  githubClientToken = process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;
} else {
  githubClientToken = process.env.GITHUB_PERSONAL_TOKEN;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    gists: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  const searchUsers = async text => {
    // need to use setState to change state variables
    setLoading();

    // Axios to get data
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
      'headers': {
        'Authorization': `token ${githubClientToken}` 
      }
    });

    dispatch({ 
      type: SEARCH_USERS,
      payload: res.data.items
    });
    
  };

  // Get single github user
  const getUser = async (username) => {
    setLoading();

    // Axios to get data
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      'headers': {
        'Authorization': `token ${githubClientToken}` 
      }
    });

    dispatch({
      type: GET_USER,
      payload: res.data
    })
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading(true);

    // Axios to get data
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`, {
      'headers': {
        'Authorization': `token ${githubClientToken}` 
      }
    });

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

  // Get Gists
  const getUserGists = async (username) => {
    setLoading(true);

    // Axios to get data
    const res = await axios.get(`https://api.github.com/users/${username}/gists?per_page=5&sort=created:asc`, {
      'headers': {
        'Authorization': `token ${githubClientToken}` 
      }
    });
    
    dispatch({
      type: GET_GISTS,
      payload: res.data
    })
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });


  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return <githubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      gists: state.gists,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos,
      getUserGists
    }}
  >
    {props.children}
  </githubContext.Provider>
}

export default GithubState;
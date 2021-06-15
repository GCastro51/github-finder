import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'react-moment';


export const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <div>
        <h3>
          <a href={repo.html_url} target="_blank">{repo.name}</a>
        </h3>
        <p className="text-right">
          <div className="badge badge-primary">Watchers: {repo.watchers_count}</div>
          <div className="badge badge-warning">Open Issues: {repo.open_issues_count}</div>
          <div className="badge badge-warning">Last Update: <Moment format="MM/DD/YYYY">{repo.updated_at}</Moment></div>
        </p>
      </div>
      <p>{repo.description}</p>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem;
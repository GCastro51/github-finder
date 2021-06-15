import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'react-moment';



export const GistItem = ({ gist }) => {
  return (
    <div className="card">
      <div>
        <h3>
          <a href={gist.html_url} target="_blank">{gist.id}</a>
        </h3>
        <p className="text-right">
          <div className="badge badge-success">File Count: {Object.keys(gist.files).length}</div>
          <div className="badge badge-warning">Comments: {gist.comments}</div>
          <div className="badge badge-warning">Last Update: <Moment format="MM/DD/YYYY">{gist.updated_at}</Moment></div>
        </p>
      </div>
      <p>{gist.description}</p>
    </div>
  )
}

GistItem.propTypes = {
  gist: PropTypes.object.isRequired,
}

export default GistItem;
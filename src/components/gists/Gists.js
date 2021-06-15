import React from 'react'
import PropTypes from 'prop-types'
import GistItem from './GistItem';

export const Gists = ({ gists }) => {
  return gists.map(gist => <GistItem gist={gist} key={gist.id} />)
}

Gists.propTypes = {
  gists: PropTypes.array.isRequired,
}

export default Gists
import React from 'react';
import PropTypes from 'prop-types';


const BlockStatic = ({
  contextualizer: {
    thumbnailDataset
  },
}, {
  datasets = {}
}) => {
  const thumbnail = datasets[thumbnailDataset];
  return (
    <figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-video">
      {
        thumbnail ? 
          <img className="contextualizer-thumbnail" src={thumbnail.uri} />
          :
        <div className="thumbnail-placeholder" />
      }
  </figure>
  )
}

BlockStatic.propTypes = {
  contextualizer: PropTypes.object,
}

BlockStatic.contextTypes = {
  datasets: PropTypes.object,
}

export default BlockStatic;
import React from 'react';



export default ({
  // resource: {
  //   data: {
  //     thumbnail
  //   }
  // },
  contextualizer: {
    thumbnailUrl
  },
  // contextualization
}) => {
  return (
    <figure className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-video">
      {
        thumbnailUrl ? 
          <img className="contextualizer-thumbnail" src={thumbnailUrl} />
          :
        <div className="thumbnail-placeholder" />
      }
  </figure>
  )
}
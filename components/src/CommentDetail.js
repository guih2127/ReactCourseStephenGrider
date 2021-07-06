import React from 'react';

// props -> sistema para passar dados do componente PAI para o componente FILHO
// o objetivo dos props é customizar ou configurar o componente filho

const CommentDetail = props => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  )
};

export default CommentDetail; 
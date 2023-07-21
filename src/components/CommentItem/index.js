// Write your code here

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikedImage, deleteComment} = props
  const {id, name, date, comment, isLiked} = commentDetails

  const onClickLikedImage = () => {
    toggleLikedImage(id)
  }

  const deleteCommentItem = () => {
    deleteComment(id)
  }

  const firstLetterInName = name[0].toUpperCase()

  const likedImages = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isLiked ? 'like-text' : ''

  return (
    <li className="comments">
      <div className="comment-list-items">
        <div className="name-container">
          <p className="first-word">{firstLetterInName}</p>
        </div>
        <div className="name-time-container">
          <h1 className="name-heading">{name}</h1>
          <p className="time">{date} ago</p>
        </div>
        <div className="comment-message-container">
          <p className="comment-message">{comment}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          className={`like-button ${likeClassName}`}
          type="button"
          onClick={onClickLikedImage}
        >
          <img src={likedImages} alt="like" className="like-image" />
          Like
        </button>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={deleteCommentItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

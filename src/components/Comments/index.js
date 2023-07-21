import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

/*
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
*/

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  toggleLikedImage = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state

    return (
      <div className="app-main-container">
        <h1 className="main-heading">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="comments-image"
        />
        <p className="description">Say something about 4.0 Technologies</p>
        <div className="user-input-container">
          <form className="form-container" onSubmit={this.onAddComment}>
            <input
              type="text"
              value={name}
              className="name-input-box"
              placeholder="Your Name"
              onChange={this.onChangeNameInput}
            />
            <textarea
              rows="6"
              value={comment}
              className="text-input-box"
              placeholder="Your Comment"
              onChange={this.onChangeTextArea}
            />
            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
          <hr />
          <p className="comments-count">
            <span className="comments-number">{commentsList.length} </span>
            Comments
          </p>
        </div>
        <ul className="comment-list-items">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleLikedImage={this.toggleLikedImage}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

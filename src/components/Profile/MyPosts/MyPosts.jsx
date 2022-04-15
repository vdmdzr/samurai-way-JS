import React from "react"
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


export const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
      <div className={s.main}>
          <h3>My posts</h3>
          <div>
              <div>
                  <textarea onChange={onPostChange} ref={newPostElement}
                            value={props.newPostText}/>
              </div>
              <div className={s.buttonPost}>
                  <button onClick={onAddPost}>add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
      </div>
    )
}
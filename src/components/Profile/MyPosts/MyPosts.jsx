import React from "react"
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";


export const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
      <div className={s.main}>
          <h3>My posts</h3>
          <AddNewPostFormRedux onSubmit={onAddPost}/>
          <div className={s.posts}>
              {postsElements}
          </div>
      </div>
    )
}

const AddNewPostForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div>
                  <Field name={'newPostText'} component={'textarea'}/>
          </div>
          <div className={s.buttonPost}>
              <button>add post</button>
          </div>
      </form>
  )
}


const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
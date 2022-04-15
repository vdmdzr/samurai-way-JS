import React from "react"
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";



export const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)// передаем каждое изменение эрии в стэйт, а уже из стэйта перерисовываем эрию
    }

    return (
      <MyPosts updateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}/>
    )
}
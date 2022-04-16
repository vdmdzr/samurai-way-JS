import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../storeContecst";


export const MyPostsContainer = () => {
    return (
      <StoreContext.Consumer>
          {(store)=>{
              let state = store.getState()
              let addPost = () => {
                  store.dispatch(addPostActionCreator())
              }
              let onPostChange = (text) => {
                  let action = updateNewPostTextActionCreator(text)
                  store.dispatch(action)// передаем каждое изменение эрии в стэйт, а уже из стэйта перерисовываем эрию
              }
              return <MyPosts updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText}/>}
      }
      </StoreContext.Consumer>
    )
}
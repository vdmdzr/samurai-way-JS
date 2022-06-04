import React from "react"
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControl";

const maxLength10 =  maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea}
                       validate={[required,maxLength10]} placeholder={'post message'}/>
            </div>
            <div className={s.buttonPost}>
                <button>add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

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



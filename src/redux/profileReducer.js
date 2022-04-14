const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you?', likesCount: 20},
        {id: 2, message: 'It`s my first post', likesCount: 15},
        {id: 3, message: 'How could happen?', likesCount: 0},
        {id: 4, message: 'You`re the best', likesCount: 30},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)//пушим новый пост в state
            state.newPostText = ''//зануляем area после нажатия add post
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
}



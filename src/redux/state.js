const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you?', likesCount: 20},
                {id: 2, message: 'It`s my first post', likesCount: 15},
                {id: 3, message: 'How could happen?', likesCount: 0},
                {id: 4, message: 'You`re the best', likesCount: 30},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vadim'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you Vasya?'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('cdc')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {   //{type: '---'}обязательно
        // const {type} = action//деструктуризация
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)//пушим новый пост в state
            this._state.profilePage.newPostText = ''//зануляем area после нажатия add post
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            console.log('reducer', action)
            this._state.dialogsPage.newMessageBody = action.newBody
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    debugger
    return ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => {

    return (
      {type: UPDATE_NEW_MESSAGE_BODY, newBody: body})
}

export default store
window.store = store
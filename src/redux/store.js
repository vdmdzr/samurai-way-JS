import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

//already don`t use

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
        sidebar:{}
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
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
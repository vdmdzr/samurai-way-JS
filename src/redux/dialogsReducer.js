const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody: action.newBody}
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state,newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]}
        default:
            return state
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => {
    return (
      {type: UPDATE_NEW_MESSAGE_BODY, newBody: body})
}


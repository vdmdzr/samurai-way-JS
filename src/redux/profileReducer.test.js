import {addPostActionCreator, deletePostAC, profileReducer} from "./profileReducer";

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you?', likesCount: 20},
        {id: 2, message: 'It`s my first post', likesCount: 15},
        {id: 3, message: 'How could happen?', likesCount: 0},
        {id: 4, message: 'You`re the best', likesCount: 30},
    ]
}

it('new post should be added',()=>{
    const action =addPostActionCreator('YO')

    let newState = profileReducer(initialState,action)

    expect(newState.posts.length).toBe(5)
})


it('message into new post should be correct',()=>{
    const action =addPostActionCreator('YO')
    let newState = profileReducer(initialState,action)

    expect(newState.posts[4].message).toBe('YO')
})

it('post should be deleting',()=>{
    const action =deletePostAC(1)
    let newState = profileReducer(initialState,action)

    expect(newState.posts.length).toBe(3)
})


it('amount posts shouldn`t change',()=>{
    const action =deletePostAC(1000)
    let newState = profileReducer(initialState,action)

    expect(newState.posts.length).toBe(4)
})
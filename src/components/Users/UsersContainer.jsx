import React from "react";
import {unfollowAC, followAC, setUsersAC} from "../../redux/usersReducer";
import {Users} from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users//в Users будет только users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Users)







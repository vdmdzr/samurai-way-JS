import React from "react";
import {unfollowAC, followAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from "../../redux/usersReducer";
import {Users} from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,//в Users будет users из state
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Users)







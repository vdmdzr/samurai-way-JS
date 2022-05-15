import React from "react";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI as userAPI} from "../../api/api";

export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
          .then(data => {
              debugger
              this.props.toggleIsFetching(false)
              this.props.setUsers(data.items)
              this.props.setTotalUsersCount(data.totalCount)
          })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        userAPI.getUsers(pageNumber, this.props.pageSize)
          .then(data => {
              this.props.toggleIsFetching(false)
              this.props.setUsers(data.items)
          })
    }

    render() {

        return (
          <>
              {this.props.isFetching ? <Preloader/> : null}
              <Users totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
              />
          </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,//в Users будет users из state
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer)







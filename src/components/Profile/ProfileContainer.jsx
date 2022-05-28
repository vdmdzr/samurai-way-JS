import React from "react"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2//переходим на свой профиль если если не выбран не один user
        this.props.getUserProfile(userId)
    }

    render() {
        return (
          <div>
              <Profile {...this.props} profile={this.props.profile}/>
          </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter)(ProfileContainer)
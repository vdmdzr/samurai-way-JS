import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        debugger
        this.props.getAuthUserData()
    }
    render() {
        //прокинет пропсами то что в mapStateToProps
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({//как пропсы попадают в HeaderContainer
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
import { followAC, unfollowAC, setUsersAC, setCurrentPage, setTotalUsersCount } from "./../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => dispatch(followAC(usersId)),
        unfollow: (usersId) => dispatch(unfollowAC(usersId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCount(totalUsersCount))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

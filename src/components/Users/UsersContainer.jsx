import React from "react";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "./../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { usersAPI } from "../../api/api";

class UsersApiComponent extends React.Component {

    //constructor(props) { -- елси синтаксис такой можно не писать 
    //  super(props);
    //}
  
    componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data =>{
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      usersAPI.getUser(pageNumber, this.props.pageSize).then(data =>{
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
    }
    
    render() {
      return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      onPageChanged={this.onPageChanged}/></>
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => dispatch(followAC(usersId)),
        unfollow: (usersId) => dispatch(unfollowAC(usersId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    }
} */

const UsersContainer = connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersApiComponent);

export default UsersContainer;

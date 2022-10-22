import React from "react";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from "./../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import { connect } from "react-redux";
import preloader from "../../assets/images/Capsule-Loading.svg";

class UsersApiComponent extends React.Component {

    //constructor(props) { -- елси синтаксис такой можно не писать 
    //  super(props);
    //}
  
    componentDidMount() {
     
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
    }
  
    onPageChanged = (pageNumber) => {
     
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
    }
    
    render() {
      debugger;
      return <>
      {this.props.isFetching ? <img src={preloader}/> : null}
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
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => dispatch(followAC(usersId)),
        unfollow: (usersId) => dispatch(unfollowAC(usersId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
// ^ Константы для Action creators ^
//--------------------------------------------------------

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
};

// Reducer \/ \/
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          return u.id === action.userId ? { ...u, followed: true } : u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map(u => {
          return u.id === action.userId ? {...u, followed: false} : u;
        }),
      }
    case SET_USERS: 
      //return {...state, users: [...state.users, ...action.users]}; -- Добавить в конец массива
      return {...state, users: action.users} // -- Перезаписать массив
    case SET_CURRENT_PAGE: 
       return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT: 
      return {...state, totalUsersCount: action.totalCount}
    default:
      return state;
  }
};

// Action creator-ры 
export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});


export default usersReducer;

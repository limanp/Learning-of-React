const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

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
        return {...state, users: [...state.users, ...action.users]};
    default:
        return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;

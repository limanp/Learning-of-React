import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "My first post.", likesCount: 20 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { name: "Sasha", id: 1 },
        { name: "Andrey", id: 2 },
        { name: "Vika", id: 3 },
        { name: "Victor", id: 4 },
        { name: "Oleg", id: 5 },
        { name: "Vlad", id: 6 },
      ],
      messages: [
        { message: "Hello, how are you?", id: 1 },
        { message: "Yo", id: 2 },
        { message: "I am react developer!", id: 3 },
        { message: "This is nice message!", id: 4 },
      ],
      newMessageText: "",
    },
    navbar: {
      friends: [
        { name: "Sasha", id: 1 },
        { name: "Vika", id: 3 },
        { name: "Oleg", id: 5 },
      ],
    },
  },

  _callSubscriber() {
    console.log("no subscibers (observers)");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer -- патерн / похожый на publisher-subscriber но есть отличия
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber();
  },
};

export default store;

// store - OOP

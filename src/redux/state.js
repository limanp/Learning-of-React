const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
     _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 15 },
                { id: 2, message: "My first post.", likesCount: 20 }
              ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { name: "Sasha", id: 1 },
                { name: "Andrey", id: 2 },
                { name: "Vika", id: 3 },
                { name: "Victor", id: 4 },
                { name: "Oleg", id: 5 },
                { name: "Vlad", id: 6 }
              ],
            messages: [
                { message: "Hello, how are you?", id: 1 },
                { message: "Yo", id: 2 },
                { message: "I am react developer!", id: 3 },
                { message: "This is nice message!", id: 4 }
              ],
            newMessageText: ''
        },
        navbar: {
            friends: [
                {name: "Sasha", id: 1},
                {name: "Vika", id: 3},
                {name: "Oleg", id: 5},
            ]
        },
    },

    _callSubscriber() {
        console.log('no subscibers (observers)');
    },

    getState () {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer -- патерн / похожый на publisher-subscriber но есть отличия
    },

    dispatch(action) { 
        if(action.type === ADD_POST) {
            let newPost = {
                id: 3, 
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if(action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText,
                id: 4
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export default store;


// store - OOP
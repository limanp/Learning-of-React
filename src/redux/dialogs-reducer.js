const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        message: state.newMessageText,
        id: 4,
      };
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;

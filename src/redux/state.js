

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "My first post.", likesCount: 20 }
          ],
        newPostText: 'hello world!'
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
        newMessageText: 'Hello world!'
    },
    navbar: {
        friends: [
            {name: "Sasha", id: 1},
            {name: "Vika", id: 3},
            {name: "Oleg", id: 5},
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id: 3, 
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText, 
        id: 4
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state)
}

let rerenderEntireTree;
export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer -- патерн / похожый на publisher-subscriber но есть отличия
}

export default state;

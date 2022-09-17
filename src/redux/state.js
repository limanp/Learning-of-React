import {rerenderEntireTree} from './../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 15 },
            { id: 2, message: "My first post.", likesCount: 20 }
          ]
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
          ]
    },
    navbar: {
        friends: [
            {name: "Sasha", id: 1},
            {name: "Vika", id: 3},
            {name: "Oleg", id: 5},
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3, 
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state, addPost);
}



export default state;

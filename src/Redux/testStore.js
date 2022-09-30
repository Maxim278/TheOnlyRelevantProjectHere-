import postPageReducer from "../Reducers/PostPageReducer";

const PUSH_POST = 'PUSH-POST';
const SYMBOL_ADDING = 'SYMBOL-ADDING';

let store = {
    _state: {
        postPageState: {
            posts: [
                {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8e4U3MBKfwYGLmiX_ixLOKBDXKd4oDoyh8Q&usqp=CAU',
                    postText: 'This is my first post!', postLikes: 'Likes : 2'
                },
                {
                    logo: 'https://www.ixbt.com/img/r30/00/02/09/08/browsers.png',
                    postText: 'Beautiful day!', postLikes: 'Likes : 6'
                },
                {
                    logo: 'data:image/jpeg;base64,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',
                    postText: 'El ou El', postLikes: 'Likes : 12'
                },
                {
                    logo: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg',
                    postText: 'Parole parole parole', postLikes: 'Likes : 11'
                }
            ],
            symbolAddingString: '',
        },
        messagePageState: {}
    },
    getState () {
        return this._state;
    },
    /*pushPost () {
        let newPost = {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKHqzYAeBBZNPuVpvPxDywaOPHvBUxHlEaA&usqp=CAU',
            postText: this._state.postPageState.symbolAddingString,
            postLikes: 'Likes: 0',
        };
        this._state.postPageState.posts.push(newPost);
        this.rerenderFunction();
    },
    symbolAdding (symbol) {
        this._state.postPageState.symbolAddingString = symbol;
        this.rerenderFunction(); //Unnecessary
    },*/

    dispatcher (action){
        this._state.postPageState = postPageReducer(this._state.postPageState,action);
        this.rerenderFunction();
        /*switch (action.type) {
            case PUSH_POST:
                let newPost = {
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKHqzYAeBBZNPuVpvPxDywaOPHvBUxHlEaA&usqp=CAU',
                    postText: this._state.postPageState.symbolAddingString,
                    postLikes: 'Likes: 0',
                };
                this._state.postPageState.posts.push(newPost);
                this.rerenderFunction();
                break;
            case SYMBOL_ADDING:
                this._state.postPageState.symbolAddingString = action.symbol;
                this.rerenderFunction(); //Unnecessary
                break;
            default:
        }*/
    },

    rerenderFunction () {},
    subscribe (observer) {
        this.rerenderFunction = observer;
    }
}

export default store;
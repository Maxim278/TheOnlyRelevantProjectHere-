import React from "react";
import PostPage from "./PostPage";
import {addSymbolActionCreator,addPostActionCreator} from '../Reducers/PostPageReducer'
import {connect} from "react-redux";

let mapStateToProps = (state) => { //connect сам делает store.getState();
    return(
        {
            posts: state.postPageState.posts,
        }
    );
}
let mapDispatchToProps = (dispatch) => { //connect делает store.dispatch
    return(
        {
            onChangeAddSymbolContainer: (currentValue) => {
                dispatch(addSymbolActionCreator(currentValue));
            },
            onClickAddPostContainer: () => {
                dispatch(addPostActionCreator())
            }
        }
    );
}

const PostPageContainer = connect(mapStateToProps,mapDispatchToProps)(PostPage); //В ПРОПСЫ к PostPage попадут объекты,
                                                                                //возвращаемые в f1 и f2
export default PostPageContainer;
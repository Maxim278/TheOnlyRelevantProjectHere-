import React from "react";
import style from '../Styles/PostPage.module.css'
import Post from "./Post";

let PostPage = (props) => {
    let textareaRef = React.createRef();

    let onChangeAddSymbol = () => {
        console.log(`String: ${textareaRef.current.value}`);
        props.onChangeAddSymbolContainer(textareaRef.current.value);
    }
    let onClickAddPost = () => {
        console.log(`Value ${textareaRef.current.value} has been pushed.`);
        props.onClickAddPostContainer();
        textareaRef.current.value = ''; //////////////ПЕРЕНЕСИ ПОТОМ ЭТУ СТРОКУ В РЕДЬЮСЕР
    }

    let jsxArray = props.posts.map((arrayObj) =>
        <Post logo={arrayObj.logo} postText={arrayObj.postText} postLikes={arrayObj.postLikes}/>);

    return (
        <div className={style.postPageWrapper}>
            <h3>My posts</h3>
            <div><textarea className={style.textarea1} placeholder='Receiver'/></div>
            <div><textarea
                ref={textareaRef}
                className={style.textarea2}
                placeholder='Enter your message...'
                onChange={onChangeAddSymbol}/>
            </div>
            <div><button onClick={onClickAddPost}>Send</button></div>
            <div>{jsxArray}</div>
        </div>
    );
}

export default PostPage;
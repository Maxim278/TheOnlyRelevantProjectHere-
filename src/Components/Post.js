import style from '../Styles/Post.module.css'

let Post = (props) => {
    return (
        <div className={style.postWrapper}>
            <img src={props.logo}/>
            <div>{props.postText}</div>
            <div>{props.postLikes}</div>
        </div>
    );
}

export default Post;
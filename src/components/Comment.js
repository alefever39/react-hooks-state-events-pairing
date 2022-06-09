import Likes from './Likes';

function Comment({ user, comment, onClick }) {
    return(
        <div id="comment">
            <h3>{user}</h3>
            <p>{comment}</p>
            <Likes downvotesOriginal={0} upvotesOriginal={0} />
            <button onClick={() => onClick(user)} >Remove Comment</button>
        </div>
    )
}

export default Comment;
import { useState } from "react";
import Comment from './Comment';
import Form from './Form';

function Comments({ commentsOriginal }) {
    const [ hideComments, setHideComments ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ comments, setComments ] = useState(commentsOriginal);

    function onFormSubmit(type) {
        const unsorted = [...comments]
        const sorted = unsorted.sort((a, b) => a[type] > b[type] ? 1 : -1);
        return setComments(sorted);
    }

    const filteredComments = comments.filter(comment => {
        return comment.user.toLowerCase().includes(search.toLowerCase()) || comment.comment.toLowerCase().includes(search.toLowerCase())
    })
    const commentsLength = filteredComments.length
    

    function handleClick() {
        setHideComments(hideComments => !hideComments)
    }

    function handleClickDelete(user) {
        setComments(comments => comments.filter(comment => comment.user !== user))
    }

    function handleChange(e) {
        setSearch(e.target.value)
    }




    function hideOrDisplayComments() {
        if (hideComments) {
            return null
        } else {
            return filteredComments.map(comment => <Comment key={comment.user} user={comment.user} comment={comment.comment} onClick={handleClickDelete} />)
        }
    }

    return(
        <div>
            <button onClick={handleClick} >{hideComments ? "Show Comments" : "Hide Comments"}</button>
            <hr/>
            <h2>{commentsLength} Comments</h2>
            <input type="text" name="search" value={search} onChange={handleChange} />
            <Form onFormSubmit={onFormSubmit} />
            {hideOrDisplayComments()}
        </div>
    )
}


export default Comments;
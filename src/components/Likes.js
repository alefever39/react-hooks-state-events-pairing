import { useState } from "react";

function Likes({ downvotesOriginal, upvotesOriginal }) {
    const [votes, setVotes] = useState({upvotes: upvotesOriginal, downvotes: downvotesOriginal})

    function handleClickEvent(e) {
        const newVote = parseInt(votes[e.target.name]) + 1
        setVotes({...votes, [e.target.name]: newVote})
    }

    return(
        <div>
            <button name="upvotes" onClick={handleClickEvent} >{votes.upvotes} 👍</button>
            <button name="downvotes" onClick={handleClickEvent} >{votes.downvotes} 👎</button>
        </div>
    )
}


export default Likes;
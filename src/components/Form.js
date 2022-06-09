import { useState } from "react";

function Form({ onFormSubmit }) {
    const [ selection, setSelection ] = useState('Default');
    
    function handleTypeChange(e) {
        setSelection(() => e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const type = {
            Default: 'id',
            User: 'user',
            Comment: 'comment',
        }
        onFormSubmit(type[selection])
    }

    return(
    <form onSubmit={handleSubmit}>
        <select onChange={handleTypeChange} value={selection}>
            <option name="id">Default</option>
            <option name="user">User</option>
            <option name="comment">Comment</option>
        </select>
        <input type="submit" value="Sort" />
    </form>
    )
}

export default Form
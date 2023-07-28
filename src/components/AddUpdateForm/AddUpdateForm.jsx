import './AddUpdateForm.css'
import {useState} from 'react'

const AddUpdateForm = props => {
    const [formData, setFormData] = useState({
        letters: "",
        engLetters: ""
    });


    return (
        <div>
            <form onSubmit={props.handleWordSubmit}>
        <input type="text" placeholder="arabic root"/>
        <input type="text" placeholder="eng letters"/>
    <input type="submit" value="Submit new root"/></form></div>
    )
}

export default AddUpdateForm
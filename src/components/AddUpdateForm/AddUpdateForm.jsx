import VKeyboard from "../VKeyboard/VKeyboard";
import "./AddUpdateForm.css";
import { useState } from "react";

const initialFormData = {
    letters: '',
    engLetters: '',
  };

const AddUpdateForm = (props) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleWordSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <div>
        <h2>Missing a root?</h2>
      <form onSubmit={handleFormSubmit}>
        <input id="letters" name="letters" onChange={handleChange}  value={formData.letters} type="text" placeholder="arabic root" />
        <input id="engLetters" name="engLetters" onChange={handleChange} value={formData.engLetters} type="text" placeholder="eng letters" />
        <input disabled={formData.letters.length === 0 || formData.engLetters.length === 0}type="submit" value="Submit new root" />
        <input disabled={formData.letters.length === 0 && formData.engLetters.length === 0}type="submit" value="Submit update to root" />
      </form>
      <VKeyboard />
    </div>
  );
};

export default AddUpdateForm;

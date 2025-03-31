import { useState, useContext } from "react"
import CurrentUserContext from "../../../contexts/CurrentUserContext"

export default function EditProfile() {
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleUpdateUser ({ name, about: description });     
  };

  return(
    <form 
      name="edit-profile-form" 
      className="popup__form popup__form_profile"
      noValidate
      onSubmit={handleSubmit}>
      <input
        type="text"
        className="popup__form-input popup__form-input_type_name"
        id="name"
        name="name"
        placeholder="Your name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__form-error-message name-error"></span>

      <input
        type="text"
        className="popup__form-input popup__form-input_type_about"
        id="about"
        name="about"
        placeholder="description"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__form-error-message about-error"></span>
      <button type="submit" value="submit" className="popup__form-button">
        Guardar
      </button>
    </form>
  );
}


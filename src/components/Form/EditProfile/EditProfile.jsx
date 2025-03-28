import { useState, useContext } from "react"
import CurrentUserContext from "../../../contexts/CurrentUserContext"
// import api from "../../../utils/api"

export default function EditProfile() {
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios
    console.log(name, description);
    handleUpdateUser ({ name, about: description }); // Actualiza la información del usuario
    
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
        minlength="2"
        maxlength="40"
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
        minlength="2"
        maxlength="200"
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
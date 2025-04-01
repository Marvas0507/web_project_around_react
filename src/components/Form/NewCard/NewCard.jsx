import { useState, useContext } from "react"
import CurrentUserContext from "../../../contexts/CurrentUserContext"

export default function NewCard({ onClose }) {

  const {handleAddCard} = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [cardLink, setCardLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleCardLinkChange = (e) => {
    setCardLink(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await handleAddCard({ name, link: cardLink });
      setName('');
      setCardLink('');
      onClose(); // Cierra el popup después de agregar la tarjeta
    } catch (error) {
      console.error("Error al agregar tarjeta:", error);
    }
  }

  // const {currentUser, handleAddCard} = useContext(CurrentUserContext);
  // const {name, setName} = useState(currentUser?.name || '');
  // const {cardLink, setCardLink} = useState(currentUser?.link || '');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }

  // const handleCardLinkChange = (e) => {
  //   setCardLink(e.target.value);
  // }
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); 
  //   try {
  //     await handleAddCard({ name, link: cardLink });
  //   } catch (error) {
  //     console.error("Error al agregar tarjeta:", error);
  //   }
  // }

  return(
    <form name="add-card-form" className="popup__form popup__form_cards" onSubmit={handleSubmit}>
      <input
        type="text"
        className="popup__form-input popup__form-input_type_place"
        id="place-title"
        name="name"
        placeholder="Title"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__form-error-message place-title-error"></span>

      <input
        type="url"
        className="popup__form-input popup__form-input_type_link"
        id="image-link"
        name="link"
        placeholder="url of imagen"
        required
        value={cardLink}
        onChange={handleCardLinkChange}  
      />
      <span className="popup__form-error-message image-link-error"></span>
      <button type="submit" value="submit" className="popup__form-button">
        Guardar
      </button>
    </form>    
  );
}
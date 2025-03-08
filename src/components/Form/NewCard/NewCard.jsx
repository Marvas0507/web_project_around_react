export default function NewCard() {
    return(
      <form name="add-card-form" className="popup__form popup__form_cards">
        <input
          type="text"
          className="popup__form-input popup__form-input_type_place"
          id="place-title"
          name="name"
          placeholder="Title"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__form-error-message place-title-error"></span>

        <input
          type="url"
          className="popup__form-input popup__form-input_type_link"
          id="image-link"
          name="link"
          placeholder="url of imagen"
          required
        />
        <span className="popup__form-error-message image-link-error"></span>
        <button type="submit" value="submit" className="popup__form-button">
          Guardar
        </button>
      </form>    
    )
}
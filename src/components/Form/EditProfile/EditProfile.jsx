export default function EditProfile() {
    return(
        <form name="edit-profile-form" className="popup__form popup__form_profile">
          <input
            type="text"
            className="popup__form-input popup__form-input_type_name"
            id="name"
            name="name"
            placeholder="Your name"
            minlength="2"
            maxlength="40"
            required
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
          />
          <span className="popup__form-error-message about-error"></span>
          <button type="submit" value="submit" className="popup__form-button">
            Guardar
          </button>
        </form>
    )
}
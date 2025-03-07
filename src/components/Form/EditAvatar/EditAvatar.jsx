export default function EditAvatar() {
    return(
        <form
          name="profile-avatar-form"
          className="popup__form popup__form_avatar-profile"
        >
          <input
            type="url"
            className="popup__form-input popup__form-input_type_link"
            id="avatar-link"
            name="avatarLink"
            placeholder="Enlace de una imagen"
            required
          />
          <span className="popup__form-error-message avatar-link-error"></span>
          <button type="submit" value="submit" className="popup__form-button">
            Guardar
          </button>
        </form>
    )
}
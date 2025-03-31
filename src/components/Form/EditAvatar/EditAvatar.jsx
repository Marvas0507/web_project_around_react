import { useState, useContext } from "react"
import CurrentUserContext from "../../../contexts/CurrentUserContext"

export default function EditAvatar() {
  const {currentUser, handleUpdateAvatar} = useContext(CurrentUserContext);
  const [avatarLink, setAvatarLink] = useState(currentUser?.avatar || '');

  const handleAvatarLinkChange = (e) => {
    setAvatarLink(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleUpdateAvatar({avatar: avatarLink});
    }
    catch (error) {
      console.error("Error al actualizar avatar:", error);
    }
  }

  return(
    <form
      name="profile-avatar-form"
      className="popup__form popup__form_avatar-profile"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__form-input popup__form-input_type_link"
        id="avatar-link"
        name="avatarLink"
        placeholder="Enlace de una imagen"
        required
        value={avatarLink}
        onChange={handleAvatarLinkChange}
      />
      <span className="popup__form-error-message avatar-link-error"></span>
      <button type="submit" value="submit" className="popup__form-button">
        Guardar
      </button>
    </form>
  );
}
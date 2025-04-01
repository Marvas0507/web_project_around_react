import Popup from '../Popup/Popup.jsx';
import NewCard from '../Form/NewCard/NewCard.jsx';
import EditAvatar from '../Form/EditAvatar/EditAvatar.jsx';
import EditProfile from '../Form/EditProfile/EditProfile.jsx';
import Card from '../Card/Card.jsx';
import ImagePopup from '../ImagePopup/ImagePopup.jsx';
import { useState, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

export default function Main( {cards, onCardLike, onCardDelete} ) {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const { currentUser } = useContext(CurrentUserContext);
  
  const newCardPopup = {title: 'Nuevo lugar', children: <NewCard onClose={handleClosePopup} />};
  const editAvatarPopup = {title: 'Cambiar foto de perfil', children: <EditAvatar onClose={handleClosePopup} />};
  const editProfilePopup = {title: 'Editar perfil', children: <EditProfile onClose={handleClosePopup} />};
  
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return(
    <main className='content'>
        <section className="profile">
          <div className="profile__avatar-cointainer">
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="your avatar"
            />
            <button
              className="profile__avatar-button-edit"
              type="button"
              title="editar-foto-perfil"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            ></button>
          </div>
          <div className="profile__info-cointainer">
            <div className="profile__name-cointainer">
              <h1 className="profile__name">{currentUser.name}</h1>
              <div 
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editProfilePopup)}
               >
              </div>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
          <div 
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
            >
          </div>
        </section>
        
        <section className="cards">
          <ul className="cards__list">
            {/* Only render if cards is an array and not empty */}
            {Array.isArray(cards) && cards.map((card) => ( 
              <Card
                key={card._id}
                card={card}
                name={card.name}
                link={card.link}
                onCardClick={handleCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}

        {selectedCard && (
          <ImagePopup 
            card={selectedCard}
            onClose={handleClosePopup} 
            isOpen={!!selectedCard} 
          />
        )}
      </main>
  );
}
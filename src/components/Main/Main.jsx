// import avatar from '../../images/Avatar.png';
import Popup from '../Popup/Popup.jsx';
import NewCard from '../Form/NewCard/NewCard.jsx';
import EditAvatar from '../Form/EditAvatar/EditAvatar.jsx';
import EditProfile from '../Form/EditProfile/EditProfile.jsx';
import Card from '../Cards/Cards.jsx';
import ImagePopup from '../ImagePopup/ImagePopup.jsx';
import { useState, useEffect, useContext } from 'react';
// import api from '../../utils/api.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

export default function Main( {cards, onCardLike, onCardDelete} ) {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  // const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  // useEffect(() => {
  //   api.getInitialCards()
  //     .then(setCards)
  //     .catch(console.log);
  // }, []);
  
  const newCardPopup = {title: 'Nuevo lugar', children: <NewCard />};
  const editAvatarPopup = {title: 'Cambiar foto de perfil', children: <EditAvatar />};
  const editProfilePopup = {title: 'Editar perfil', children: <EditProfile />};
  
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

  // async function handleCardLike(card) {
  //   // Verifica una vez más si a esta tarjeta ya les has dado like
  //   const isLiked = card.isLiked;
    
  //   // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
  //   await api.addLike(card._id, !isLiked).then((newCard) => {
  //       setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
  //   }).catch((error) => console.error(error));
  // }

  // async function handleCardDelete(card) {
  //   // Envía una solicitud a la API para eliminar la tarjeta
  //   await api.deleteCard(card._id).then(() => {
  //       // Actualiza el estado
  //       setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
  //   }).catch((error) => console.error(error));
  // }

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
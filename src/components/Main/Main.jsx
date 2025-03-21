import avatar from '../../images/Avatar.png';
import Popup from '../Popup/Popup.jsx';
import NewCard from '../Form/NewCard/NewCard.jsx';
import EditAvatar from '../Form/EditAvatar/EditAvatar.jsx';
import EditProfile from '../Form/EditProfile/EditProfile.jsx';
import Card from '../Cards/Cards.jsx';
import ImagePopup from '../ImagePopup/ImagePopup.jsx';
import { useState, useEffect, useContext } from 'react';
import api from '../../utils/api.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

// const cards = [
//   {
//     isLiked: false,
//     // _id: '5d1f0611d321eb4bdcd707dd',
//     _id: "1",
//     name: 'Yosemite Valley',
//     link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
//     // owner: '5d1f0611d321eb4bdcd707dd',
//     // createdAt: '2019-07-05T08:10:57.741Z',
//   },
//   {
//     isLiked: false,
//     // _id: '5d1f064ed321eb4bdcd707de',
//     _id: "2",
//     name: 'Lake Louise',
//     link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
//     // owner: '5d1f0611d321eb4bdcd707dd',
//     // createdAt: '2019-07-05T08:11:58.324Z',
//   },
// ];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
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

  return(
    <main className='content'>
        <section className="profile">
          <div className="profile__avatar-cointainer">
            <img
              className="profile__image"
              src={avatar}
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
              <h1 className="profile__name">Jacques Cousteau</h1>
              <div 
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editProfilePopup)}
               >
              </div>
            </div>
            <p className="profile__about">Explorador</p>
          </div>
          <div 
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
            >
          </div>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card 
                key={card._id}
                card={card} 
                name={card.name}
                link={card.link}
                onCardClick={handleCardClick}
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
import { useState, useEffect } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import api from '../utils/api.js'
import CurrentUserContext  from '../contexts/CurrentUserContext.js'

function App(){
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState({});

  async function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    try {
        const newCard = isLiked
            ? await api.removeLike(card._id)  // Quitar like
            : await api.addLike(card._id, true); // Dar like

        setCards((prevCards) => 
            prevCards.map((c) => (c._id === card._id ? newCard : c))
        );
    } catch (error) {
        console.error("Error al dar o quitar like:", error);
    }
}

  async function handleCardDelete(card) {
    // Envía una solicitud a la API para eliminar la tarjeta
    await api.deleteCard(card._id).then(() => {
        // Actualiza el estado
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    }).catch((error) => console.error(error));
  }
  
  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    })
    .catch((error) => {
      console.error("Error al cargar usuario:", error);
    });
  }, []);

  const handleUpdateUser = async (data) => {
    try{
      const newData = await api.editProfile(data);
      setCurrentUser(newData);
    } catch(error){
      console.error("Error al actualizar usuario:", error);
    }
  };

  const handleUpdateAvatar = async (data) => {
    try{
      const newData = await api.editAvatarProfile(data);
      setCurrentUser(newData);
    } catch(error){
      console.error("Error al actualizar avatar:", error);
    }
  }

  useEffect(() => {
    api.getInitialCards()
      .then(setCards)
      .catch(console.log);
  }, []);

  const handleAddCard = async (cardData) => {
    try{
      const newCard = await api.addCard(cardData);
      setCards([newCard, ...cards]);
    } catch(error){
      console.error("Error al agregar tarjeta:", error);
    }
  }

  return(
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddCard}}>
      <div className='page'>
        <Header />
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
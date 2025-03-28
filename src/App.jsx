import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import api from './utils/api.js'
import CurrentUserContext  from './contexts/CurrentUserContext.jsx'

function App(){
  const [currentUser, setCurrentUser] = useState({});
  
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

  return(
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
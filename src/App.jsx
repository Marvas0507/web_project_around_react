import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import api from './utils/api.js'
import CurrentUserContext  from './contexts/CurrentUserContext.jsx'

function App(){
  const [currentUser, setCurrentUser] = useState({});
  
  // useEffect(() => {
  //   api.getInitialCards()
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //     })
  //     .catch((err) => {console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     await api.getUserInfo().then((data) => {
  //       setCurrentUser(data);
  //     });
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error al cargar usuario:", error);
      } finally {
        setIsLoading(false); // Terminamos de cargar
      }
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.editProfile(data).then((newData) => {
        console.log(newData);
        setCurrentUser(newData);
        
      });
    })();
  };

  return(
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import api from './utils/api.js'
import CurrentUserContext  from './contexts/CurrentUserContext.jsx'

function App(){
  const [currentUser, setCurrentUser] = useState({});
  
  useEffect(() => {
    api.getInitialCards()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {console.log(err);
      });
  }, []);

  return(
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
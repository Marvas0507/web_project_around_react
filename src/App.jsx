// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import logo from './images/Vector.svg'
// import avatar from './images/Avatar.png'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

function App(){
  return(
    <div className='page'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
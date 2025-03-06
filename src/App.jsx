import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './images/Vector.svg'
import avatar from './images/Avatar.png'

function App(){
  return(
    <div className='page'>
      <header className='header'>
        <img
          src={logo}
          alt='Website Logo' 
          className='header__logo' 
        />
      </header>

      <main className='content'>
        <section className="profile">
          <div class="profile__avatar-cointainer">
            <img
              class="profile__image"
              src={avatar}
              alt="your avatar"
            />
            <button
              className="profile__avatar-button-edit"
              type="button"
              title="editar-foto-perfil"
            ></button>
          </div>
          <div className="profile__info-cointainer">
            <div className="profile__name-cointainer">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <div className="profile__edit-button"></div>
            </div>
            <p className="profile__about">Explorador</p>
          </div>
          <div className="profile__add-button"></div>
        </section>

        <section className="cards"></section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&#169; 2024. Marvin Vásquez</p>
      </footer>
    </div>
  );
}

export default App;
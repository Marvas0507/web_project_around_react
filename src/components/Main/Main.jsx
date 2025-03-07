import avatar from '../../images/Avatar.png';

// function Main() {
//   return (
//     <main className='content'>
//         <section className="profile">
//           <div class="profile__avatar-cointainer">
//             <img
//               class="profile__image"
//               src={avatar}
//               alt="your avatar"
//             />
//             <button
//               className="profile__avatar-button-edit"
//               type="button"
//               title="editar-foto-perfil"
//             ></button>
//           </div>
//           <div className="profile__info-cointainer">
//             <div className="profile__name-cointainer">
//               <h1 className="profile__name">Jacques Cousteau</h1>
//               <div className="profile__edit-button"></div>
//             </div>
//             <p className="profile__about">Explorador</p>
//           </div>
//           <div className="profile__add-button"></div>
//         </section>

//         <section className="cards"></section>

//         {popup && (
//         <Popup onClose={handleClosePopup} title={popup.title}>
//           {popup.children}
//         </Popup>
//       )}
//       </main>
//   );
// }

// export default Main;

import { useState } from 'react';
export default function Main() {
  const [popup, setPopup] = useState(null);
  
  const newCardPopup ={
    title: 'Nueva lugar',
    children: <NewCard />
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return(
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

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
  )
}
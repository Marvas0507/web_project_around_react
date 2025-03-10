export default function ImagePopup({ card, onClose, isOpen }) {
    // if (!card) return null;
    
    return(
        <section className={`popup ${ isOpen ? 'popup__show' : '' }`} id="popup-photo">
            <div className="popup__content popup__content_type_popup_photo">
            <div className="popup__button-close" onClick={onClose}></div>
            <img src={card.link}alt="" className="popup__content-image" />
            <h2 className="popup__subtitle">{card.name}</h2>   
            </div>
        </section>
    );
}
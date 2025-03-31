import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ onCardClick, card, onCardLike, onCardDelete }) {
    const { currentUser } = useContext(CurrentUserContext);
    if (!card || !card.likes || !card.owner) return null;
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    const isOwner = card.owner._id === currentUser._id;
    const cardLikeButtonClassName = `card__icon card__icon_type_like ${isLiked ? 'card__icon_type_like-active' : ''}`;

    function handleClick() {
        if (onCardClick){
            onCardClick(card);
        }
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return(
        <div className="template__card">
            <article className="card">
                <img 
                    id="card-image" 
                    className="card__image" 
                    alt={card.name}
                    src={card.link}
                    onClick={handleClick}
                />
                {isOwner && <div className="card__icon card__icon_type_delete" onClick={handleDeleteClick}></div>}
                <div className="card__cointainer">
                    <h2 className="card__title"> {card.name} </h2>
                    <div className="card__cointainer-like">
                    <div className={cardLikeButtonClassName} id="like" onClick={handleLikeClick}></div>
                    <span className="card__like-number">{card.likes.length}</span>
                    </div>
                </div>
            </article>
        </div> 
    );
}
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Cards({ link, name, onCardClick, card }) {
    const currentUser = useContext(CurrentUserContext);
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    const cardLikeButtonClassName = `card__icon card__icon_type_like ${isLiked ? 'card__icon_type_like-active' : ''}`;

    function handleClick() {
        if (onCardClick){
            onCardClick(card);
        }
    }

    return(
        <div className="template__card">
            <article className="card">
                <img 
                    id="card-image" 
                    className="card__image" 
                    alt={name}
                    src={link}
                    onClick={handleClick}
                />
                <div className="card__icon card__icon_type_delete"></div>
                <div className="card__cointainer">
                    <h2 className="card__title"> {name} </h2>
                    <div className="card__cointainer-like">
                    <div className={cardLikeButtonClassName} id="like"></div>
                    <span className="card__like-number">{card.likes.length}</span>
                    </div>
                </div>
            </article>
        </div> 
    );
}
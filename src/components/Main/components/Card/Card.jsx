export default function Card(props) {
    const {name, link} = props.card;
    return(
        <div className="template__card">
            <article className="card">
                <img 
                    id="card-image" 
                    className="card__image" 
                    alt={name}
                    src={link}
                />
                <div className="card__icon card__icon_type_delete"></div>
                <div className="card__cointainer">
                    <h2 className="card__title"> {name} </h2>
                    <div className="card__cointainer-like">
                    <div className="card__icon card__icon_type_like" id="like"></div>
                    <span className="card__like-number"></span>
                    </div>
                </div>
            </article>
        </div> 
    );
}
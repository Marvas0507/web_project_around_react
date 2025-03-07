export default function Popup(props) {
    const {onClose, title, children} = props;
    return(
        <div className="popup">
            <div className="popup__content">
                <div 
                    className="popup__button-close"
                    onClick={onClose}>
                </div>
                <h2 className="popup__title">{title}</h2>
                {children}
            </div>
        </div> 
    );
}
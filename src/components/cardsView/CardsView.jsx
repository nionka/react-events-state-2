import ShopCard from '../shopCard/ShopCard';
import PropTypes from 'prop-types';

export default function CardsView({ cards }) {
    return (
        <ul className='cards'>
            {cards.map((card, index) => <ShopCard key={index} card={card} />)}
        </ul>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}
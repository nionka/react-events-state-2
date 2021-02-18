import ShopItem from '../shopItem/ShopItem';
import PropTypes from 'prop-types';

export default function ListView ({ cards }) {
    return (
        <ul className='list'>
            {cards.map((card, index) => <ShopItem key={index} card={card} />)}
        </ul>    
    )
}

ListView.propTypes = {
    cards: PropTypes.array.isRequired
}
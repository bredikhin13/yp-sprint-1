import React from 'react';
import Card from './Card';

function PlacesGrid({cards, onCardClick, onCardLike, onCardDelete}) {
    return (
        <main className="content">
            <ul className="places__list">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))}
            </ul>
        </main>
    );
}

export default PlacesGrid;

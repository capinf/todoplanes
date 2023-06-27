import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Card = () => {
  const [cardCount, setCardCount] = useState(1);
  const [cards, setCards] = useState([]);

  const addCard = () => {
    Swal.fire({
      title: 'Agregar Card',
      html: `
        <div>
          <input id="card-title" class="swal2-input" placeholder="Título de la tarjeta">
          <input id="card-text" class="swal2-input" placeholder="Texto de la tarjeta">
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const title = Swal.getPopup().querySelector('#card-title').value;
        const text = Swal.getPopup().querySelector('#card-text').value;
        createCard(title, text);
      },
      didOpen: () => {
        Swal.getFocusableElements().forEach((element) => {
          element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              Swal.clickConfirm();
            }
          });
        });
      }
    });
  };

  const createCard = (title, text) => {
    const newCard = {
      title: title,
      text: text
    };
    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
  };

  const handleTitleChange = (event, index) => {
    const updatedCards = [...cards];
    updatedCards[index].title = event.target.value;
    setCards(updatedCards);
  };

  const handleTextChange = (event, index) => {
    const updatedCards = [...cards];
    updatedCards[index].text = event.target.value;
    setCards(updatedCards);
  };

  return (
    <div>
      <div className="row">
        {[...Array(cardCount)].map((_, index) => (
          <div className="col-md-3" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <input
                  type="text"
                  value={cards[index] ? cards[index].title : 'Card title'}
                  onChange={(event) => handleTitleChange(event, index)}
                />
                <input
                  type="text"
                  value={cards[index] ? cards[index].text : 'Some quick example text'}
                  onChange={(event) => handleTextChange(event, index)}
                />
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button id="add-card-button" onClick={addCard}>
        Agregar Card
      </button>
    </div>
  );
};

export default Card;
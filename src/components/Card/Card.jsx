import './Card.css';
import {cardsData} from '../../Data/Data.js';
import CardDisplay from '../CardDisplay/CardDisplay';

const Card = () => {
  return (
    <div className="cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parent" key={id}>
            <CardDisplay
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value} // Changed 'Value' to 'value' (case sensitive)
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;

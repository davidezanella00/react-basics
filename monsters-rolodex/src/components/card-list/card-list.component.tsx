import CardContainer from '../card-container/card-container.component';
import './card-list.styles.css';
import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <CardContainer monster={monster} key={monster.id} />
        );
      })}
    </div>
  );
}

export default CardList;

/* class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <CardContainer monster={monster} key={monster.id} />
          );
        })}
      </div>
    );
  }
} */
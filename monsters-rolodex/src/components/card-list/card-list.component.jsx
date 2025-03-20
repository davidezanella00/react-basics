import CardContainer from '../card-container/card-container.component.jsx';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
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
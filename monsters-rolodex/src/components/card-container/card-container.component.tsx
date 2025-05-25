import './card-container.styles.css';
import { Monster } from '../../App'

type CardProps = {
    monster: Monster;
};

const CardContainer = ({ monster }: CardProps) => {
    const { name, email, id } = monster;

    return (
        <div className='card-container'>
            <img
                alt={`Monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default CardContainer;

/* class CardContainer extends Component {
    render() {
        const { name, email, id } = this.props.monster;

        return (
            <div className='card-container'>
                <img
                    alt={`Monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
} */
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    return (
        <input
            className={`search-box ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}

export default SearchBox;

/* class SearchBox extends Component {
    render() {
        const { className, placeholder, onChangeHandler } = this.props;

        return (
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        );
    }
} */
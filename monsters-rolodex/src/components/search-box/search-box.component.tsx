import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchBoxProps = {
    className?: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
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
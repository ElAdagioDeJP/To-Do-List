import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <input 
            type="text" 
            placeholder="Search To do" 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };
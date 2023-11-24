import "./App.css";
import { SearchForm } from "./components/SearchForm/SearchForm";

function App() {
    const handleSearch = (searchTerm) => {
        // Implement your search logic here, such as making API calls
        console.log("Search term:", searchTerm);
    };

    return (
        <div className="app">
            <h1>Enhanced Search Example</h1>
            <SearchForm onSearch={handleSearch} />
        </div>
    );
}

export default App;

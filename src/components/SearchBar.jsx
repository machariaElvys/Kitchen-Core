export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
  isSearching,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = searchTerm.trim();

    if (!query || isSearching) return;

    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        type="submit"
        className="btn search-button"
        disabled={isSearching}
      >
        {isSearching ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
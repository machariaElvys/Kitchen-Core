export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    onSearch(searchTerm.trim());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* <button type="submit" className="search-button">
        Search
      </button> */}
    </form>
  );
}
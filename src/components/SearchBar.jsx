export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
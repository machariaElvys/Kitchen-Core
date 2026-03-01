export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <select
      className="filter-select"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="All">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
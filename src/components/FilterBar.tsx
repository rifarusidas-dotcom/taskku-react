
interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  filter: string;
  setFilter: (value: string) => void;
}

function FilterBar({
  search,
  setSearch,
  filter,
  setFilter,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Cari tugas atau mata kuliah..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Semua">Semua Tugas</option>
        <option value="Belum Selesai">Belum Selesai</option>
        <option value="Selesai">Selesai</option>
      </select>
    </div>
  );
}

export default FilterBar;

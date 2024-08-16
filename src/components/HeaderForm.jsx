function HeaderForm() {
  return (
    <form>
      <input type="text" name="search" placeholder="Search" />
      <select name="filter">
        <option value="">all</option>
        <option value="">test12</option>
        <option value="">test123</option>
      </select>
    </form>
  );
}

export default HeaderForm;

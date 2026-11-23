
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>📚</span>
        <h2>TaskKu</h2>
      </div>

      <div className="navbar-menu">
        <a href="#beranda">Beranda</a>
        <a href="#daftar-tugas">Daftar Tugas</a>
        <a href="#tentang">Tentang</a>
      </div>

      <div className="navbar-profile">
        <span>👩‍🎓</span>
        <span>Mahasiswa</span>
      </div>
    </nav>
  );
}

export default Navbar;

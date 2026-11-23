
interface HeaderProps {
  name: string;
  nim: string;
}

function Header({ name, nim }: HeaderProps) {
  return (
    <header className="header" id="beranda">
      <div>
        <p className="header-greeting">HALO, SELAMAT DATANG 👋</p>
        <h1>Dashboard Tugas Kuliah</h1>
        <p className="header-description">
          Kelola semua tugas kuliahmu dengan lebih mudah dan teratur.
        </p>
      </div>

      <div className="student-info">
        <strong>{name}</strong>
        <span>NIM: {nim}</span>
      </div>
    </header>
  );
}

export default Header;

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img
          src={require(`../img/Louvre_faucon.png`)}
          width={80}
          height={40}
          alt={`Louvre_faucon`}
        />
      </a>
    </div>
  );
}

export default Header;

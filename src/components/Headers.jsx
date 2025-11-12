
const Headers = () => {
  // Estilos CSS inline para o cabeçalho
  const headerStyle = {
    backgroundColor: '#333', // Cor de fundo escura
    color: 'white', // Cor do texto
    padding: '10px 20px',
    display: 'flex', // Flexbox para alinhar itens
    justifyContent: 'space-between', // Espaço entre o título e a navegação
    alignItems: 'center', // Alinhamento vertical
  };

  // Estilos para o título/logo
  const logoStyle = {
    margin: 0,
    fontSize: '1.5em',
  };

  // Estilos para a lista de navegação
  const navListStyle = {
    listStyle: 'none', // Remove os marcadores da lista
    padding: 0,
    margin: 0,
    display: 'flex', // Faz com que os links fiquem lado a lado
  };

  // Estilos para cada item da lista
  const listItemStyle = {
    marginLeft: '20px', // Espaço entre os links
  };

  // Estilos para os links
  const linkStyle = {
    color: 'white',
    textDecoration: 'none', // Remove o sublinhado
    fontWeight: 'bold',
  };

  return (
    // O div principal não é necessário, podemos usar diretamente o <header> ou <nav>
    <header style={headerStyle}>
      <h1 style={logoStyle}>Meu Site Incrível</h1>
      <nav>
        <ul style={navListStyle}>
          <li style={listItemStyle}>
            <a href="#home" style={linkStyle}>Início</a>
          </li>
          <li style={listItemStyle}>
            <a href="#about" style={linkStyle}>Sobre</a>
          </li>
          <li style={listItemStyle}>
            <a href="#services" style={linkStyle}>Serviços</a>
          </li>
          <li style={listItemStyle}>
            <a href="#contact" style={linkStyle}>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
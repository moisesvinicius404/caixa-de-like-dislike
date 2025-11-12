
const Footer = () => {
  // Estilos CSS inline para o rodapé
  const footerStyle = {
    backgroundColor: '#222', // Cor de fundo escura
    color: 'white', // Cor do texto
    padding: '20px',
    textAlign: 'center',
    borderTop: '5px solid #007bff', // Linha azul de destaque
  };

  const linkStyle = {
    color: '#007bff', // Cor do link (azul)
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Meu Site Incrível. Todos os direitos reservados.</p>
      <div>
        <a href="#privacy" style={linkStyle}>Política de Privacidade</a>
        <a href="#terms" style={linkStyle}>Termos de Serviço</a>
        <a href="mailto:contato@site.com" style={linkStyle}>Fale Conosco</a>
      </div>
    </footer>
  );
};

export default Footer;
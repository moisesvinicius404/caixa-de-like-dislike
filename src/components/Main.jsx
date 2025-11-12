
const Main = () => {
  // Estilos CSS inline para o conteúdo principal
  const mainStyle = {
    padding: '40px 20px',
    minHeight: '60vh', // Garante que ocupe a maior parte da tela
    textAlign: 'center',
    backgroundColor: '#f4f4f4', // Cor de fundo suave
  };

  const sectionStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <main style={mainStyle}>
      <section style={sectionStyle}>
        <h2>Conteúdo Principal da Página</h2>
        <p>
          Bem-vindo ao corpo da sua aplicação! É aqui que todo o conteúdo essencial, como artigos,
          formulários e funcionalidades interativas, será exibido. 
        </p>
        <p>
          Esta seção tem um **tamanho mínimo** (`min-height`) para empurrar o rodapé para o fim da
          página, mesmo que o conteúdo seja pequeno.
        </p>
        <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
        }}>
            Chamar à Ação
        </button>
      </section>
    </main>
  );
};

export default Main;
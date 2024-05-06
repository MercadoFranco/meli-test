import Logo from "src/assets/Logo_ML2x.png";
import "./styles.sass";

const Home = () => {
  return (
    <div className="home">
      <h2>¡Hola!</h2>
      <img src={Logo} alt="Mercado Libre Logo" />
      <h4>
        Escribí el nombre de un producto en la barra superior y encontrá lo que
        buscás y más
      </h4>
      <p>
        Esto es una prueba técnica. La aplicación usa React, y fue creada usando
        Vite.
        <br />
        Los datos se obtienen de una api hecha con Node + Express
      </p>
    </div>
  );
};

export default Home;

import { animated, useSpring, useSpringRef } from "@react-spring/web";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const OtherComp = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));
};

const ConstantComp = () => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { x: 0 },
  });
  const handleClick = () => {
    api.start({
      to: {
        x: springs.x.get() === 100 ? 0 : 100,
      },
    });
  };
  return (
    <div className="flex-container">
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "red",
          borderRadius: 8,
          ...springs,
        }}
      ></animated.div>
      <span>Render ID - {Math.random()}</span>
    </div>
  );
};

const Profile = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleDivClick = () => {
    api.start({
      from: { x: 0 },
      to: { x: 100 },
    });
  };

  const pageTransition = useSelector(
    (state: RootState) => state.pageTranisition
  );
  const pageProps = useSpring(pageTransition);

  return (
    <animated.main style={pageProps}>
      <animated.div
        onClick={handleDivClick}
        style={{
          width: 800,
          height: 300,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      >
        Profile <span>ID - {Math.random()}</span>
        <ConstantComp />
        <h1 style={{ color: "black" }}>
          Por enquanto est/a se testando animacoes nesta pagina
        </h1>
        <h1 style={{ color: "black" }}>
          Mais tarde adicionar um layout em grid
        </h1>
        <p>
          Na esquerda uma relacoes de igrejas e contribuicoes como em uma tabela
        </p>
        <p>
          Na direita um grafico customizavel com cores customizaveis para cada
          igreja
        </p>
        <p>mostrando a evolucao de cada igreja ao longo de cada semana</p>
      </animated.div>
      <div style={{ position: "relative", width: "600px", height: "300px" }}>
        <h1>Dialog Test</h1>
        <button>open dialog</button>
      </div>
    </animated.main>
  );
};

export default Profile;

import Game from "./components/Game";
import NewFormGame from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewFormGame addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2 style={{ margin: "4rem auto" }}>
            Parece que não há nada aqui, tente adicionar alguns jogos.
          </h2>
        )}
      </div>
    </div>
  );
}

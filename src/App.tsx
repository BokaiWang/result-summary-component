import Card from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="container">
      <div className="result-container">
        <Card />
        <Summary />
      </div>
    </main>
  );
}

export default App;

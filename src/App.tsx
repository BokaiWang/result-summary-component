import Card from "./components/Card";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="container">
      <div className="card__container">
        <Card />
        <Summary />
      </div>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;

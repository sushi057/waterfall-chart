import Hero from "./components/Hero";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="h-screen flex flex-row justify-between">
      <Hero />
      <Summary />
    </div>
  );
}

export default App;

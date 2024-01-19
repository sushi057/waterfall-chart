import Hero from "../components/Hero";
import Summary from "../components/Summary";

function Waterfall() {
  return (
    <div className="flex -my-14 h-screen flex-row justify-between">
      <Hero />
      <Summary />
    </div>
  );
}

export default Waterfall;

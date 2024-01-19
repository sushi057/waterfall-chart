import Hero from "../components/Hero";
import Summary from "../components/Summary";

function Waterfall() {
  return (
    <div className="-my-14 flex h-screen flex-row justify-between">
      <Hero />
      <Summary />
    </div>
  );
}

export default Waterfall;

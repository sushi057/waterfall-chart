import BargraphSummary from "../components/BargaraphSummary";
import Charts from "../components/Charts";
import Header from "../components/Header";

function Bargraph() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex h-screen flex-1 flex-col">
        <Header />
        <Charts />
      </div>
      <BargraphSummary />
    </div>
  );
}

export default Bargraph;

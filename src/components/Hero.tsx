import { faCalendarDay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <main className="p-6">
      <section>
        <p className="rounded-sm border-2 p-1.5">Employee Movement Breakdown</p>
        <div className="mt-3 flex flex-row gap-8">
          <p className="flex flex-row items-center gap-2 rounded-sm border-2 p-1.5">
            <FontAwesomeIcon icon={faCalendarDay} />
            2019
          </p>
          <p className="flex flex-row items-center gap-2 border-2 p-1.5">
            <FontAwesomeIcon icon={faPlus} />
            Add a filter
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;

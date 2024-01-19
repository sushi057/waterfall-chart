import {
  faCalendar,
  faPlus,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <main className="mx-6 my-10">
      <section>
        <h1 className="flex text-xl font-bold">
          Comparison of high performer resignation rates to the overall
          resignation rate
          <div className="ml-2 grid size-8 place-content-center rounded-full bg-black p-2">
            <FontAwesomeIcon icon={faSortDown} className="mb-2 invert" />
          </div>
        </h1>
        <p>Do high performers resign more often than others?</p>
      </section>
      <div className="flex flex-row gap-8 mt-6">
        <div className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-gray-300 px-1 py-0.5 font-semibold">
          <FontAwesomeIcon icon={faCalendar} />
          <p>Mar 2019</p>
        </div>
        <div className="flex cursor-pointer items-center  gap-2 rounded-md border-2 border-gray-300 px-1 py-0.5 font-semibold">
          <FontAwesomeIcon icon={faPlus} />
          <p>Add a filter</p>
        </div>
      </div>
    </main>
  );
}

export default Header;

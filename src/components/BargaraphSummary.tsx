import {
  faGear,
  faInfo,
  faTable,
  faTasks,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BargraphSummary() {
  return (
    <main className="relative min-w-80 bg-gray-200 px-4 pt-4 font-semibold">
      <section className="font-bold">
        <h1 className="text-xl ">Summary</h1>
        <p className="mt-4 text-lg">Apr 2018 - Mar 2019</p>
      </section>
      <ul className="-mx-2 mt-6 bg-white px-8 py-2 font-bold text-gray-500">
        <li className="my-1.5 flex justify-between text-blue-500">
          <p>Overall</p>
          <p>14.0 %</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between">
          <p>Resignation Count</p>
          <p>639</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between">
          <p>Average Headcount</p>
          <p>4.58 K</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between text-red-500">
          <p>High Performer</p>
          <p>14.1 %</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between">
          <p>Resignation Count</p>
          <p>152</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between">
          <p>Average Headcount</p>
          <p>108 K</p>
        </li>
        <hr className="border-1 -mx-3"></hr>
        <li className="my-1.5 flex justify-between text-green-500">
          <p>Difference</p>
          <p>-0.16 pp</p>
        </li>
      </ul>
      <button className="hover: mt-6 w-full border-2 border-gray-400 py-2 text-center text-lg font-bold hover:bg-gray-400">
        View Details
      </button>
      <section>
        <h2 className="mt-2 text-lg font-bold">Legend</h2>
        <hr className="border-1 my-2 border-gray-300"></hr>
        <p className="w-full bg-white px-4 py-2 text-sm font-bold text-gray-500">
          Not all data items are shown in this chart.
          <br />
          To show these values, go to
          <br />
          <a href="/" className="font-semibold text-blue-500">
            CHAT SETTINGS
          </a>
        </p>
      </section>
      <ul className="absolute -left-6 top-56">
        <li className="mt-4 grid cursor-pointer place-content-center rounded-full bg-blue-500 p-4 hover:bg-blue-600">
          <FontAwesomeIcon icon={faInfo} className="size-4 invert" />
        </li>
        <li className="mt-4 grid cursor-pointer place-content-center rounded-full bg-gray-500 p-4 hover:bg-blue-600">
          <FontAwesomeIcon icon={faTasks} className="size-4 invert" />
        </li>
        <li className="mt-4 grid cursor-pointer place-content-center rounded-full bg-gray-500 p-4 hover:bg-blue-600">
          <FontAwesomeIcon icon={faGear} className="size-4 invert" />
        </li>
        <li className="mt-4 grid cursor-pointer place-content-center rounded-full bg-gray-500 p-4 hover:bg-blue-600">
          <FontAwesomeIcon icon={faSortDown} className="size-4 invert " />
        </li>
        <li className="mt-4 grid cursor-pointer place-content-center rounded-full bg-black p-4 hover:bg-blue-600">
          <FontAwesomeIcon icon={faTable} className="size-4 invert" />
        </li>
      </ul>
    </main>
  );
}

export default BargraphSummary;

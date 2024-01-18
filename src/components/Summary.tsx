type DataProps = {
  label: string;
  value: string;
};

const data: DataProps[] = [
  {
    label: "Headcount",
    value: "+379",
  },
  {
    label: "Starting Headcount",
    value: "4.85k",
  },
  {
    label: "Ending Headcount",
    value: "5.23k",
  },
  {
    label: "Net in",
    value: "720",
  },
  {
    label: "Net out",
    value: "348",
  },
];

function Summary() {
  return (
    <main className="flex-1 bg-gray-200 px-4 pt-4 font-semibold">
      <section>
        <h1 className="text-xl font-bold">Net Change</h1>
        <ul className="mt-4 flex flex-col font-bold">
          {data.map((item) => (
            <li
              key={item.value}
              className="mt-1 flex flex-row justify-between bg-white p-2"
            >
              <p>{item.label}</p>
              <p>{item.value}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold">Legend</h2>
        <hr className="border-1 my-1 border-gray-300"></hr>
        <p>Movement Summary</p>
        <ul className="flex list-inside list-disc flex-col text-lg">
          <li className="mt-1 bg-white p-2 text-green-500">
            <p className="inline-block">Scans</p>
          </li>
          <li className="mt-1 bg-white p-2 text-red-400">
            <p className="inline-block">Exits</p>
          </li>
          <li className="mt-1 bg-white p-2 text-gray-400">
            <p className="inline-block">Discrepancies</p>
          </li>
          <li className="mt-1 bg-white p-2 text-blue-400">
            <p className="inline-block">Net Chnage</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Summary;

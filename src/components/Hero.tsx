import { faCalendarDay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactECharts from "echarts-for-react";
import data from "../data/data.json";

const keys = Object.keys(data[0]);

const subcategoryKey = keys.find((key) => key.includes("subcategory"));
const sales2019Key = keys.find((key) => key.includes("d__2019sale"));
const sales2021Key = keys.find((key) => key.includes("d__2021sale"));

const subcategories = data.map((item) => item[subcategoryKey]);
const sales2019: number[] = data.map((item) => item[sales2019Key].toFixed(0));
const sales2021: number[] = data.map((item) => item[sales2021Key].toFixed(0));

const WaterfallOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "7%",
    right: "7%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    splitLine: false,
    data: [
      "Expansion",
      "Replacement",
      "Involuntary Turnover",
      "Voluntary Turnover",
      "Discrepancies",
      "Net Change",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Placeholder",
      type: "bar",
      stack: "total",
      silent: "true",
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      data: [0, 379, 589, 357, 364, 0],
      barCategoryGap: "10%",
    },
    {
      name: "Scans",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "top",
        color: "#9bebb4",
        formatter: "+{c}",
        fontWeight: "bold",
      },
      itemStyle: {
        color: "rgba(0, 255, 0, 0.5)", // Transparent green color
      },
      data: [379, 326, "-", "-", "-", "-"],
    },
    {
      name: "Exits",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "bottom",
        color: "#fdacaa",
        formatter: "-{c}",
        fontWeight: "bold",
      },
      itemStyle: {
        color: "rgba(255, 0, 0, 0.5)", // Transparent red color
      },
      data: ["-", "-", 118, 232, "-", "-"],
    },
    {
      name: "Discrepancies",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "top",
        color: "#cfd2d8",
        formatter: "+{c}",
        fontWeight: "bold",
      },
      itemStyle: {
        color: "#cfd2d8",
      },
      data: ["-", "-", "-", "-", 7, "-"],
    },
    {
      name: "Net Change",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "top",
        color: "#bedcfe",
        formatter: "+{c}",
        fontWeight: "bold",
      },
      itemStyle: {
        color: "rgba(0, 90, 255, 0.5)", // Transparent blue color
      },
      data: ["-", "-", "-", "-", "", 362],
    },
  ],
};

function Hero() {
  return (
    <main className="flex flex-1 flex-col p-6 pt-20">
      <section>
        <p className="w-fit cursor-pointer rounded-sm border-2 p-1.5 text-base font-semibold">
          Employee Movement Breakdown
        </p>
        <div className="mt-3 flex flex-row gap-8">
          <p className="flex cursor-pointer flex-row items-center gap-2 rounded-sm border-2 p-1.5 font-semibold">
            <FontAwesomeIcon icon={faCalendarDay} />
            2019
          </p>
          <p className="flex cursor-pointer flex-row items-center gap-2 border-2 p-1.5 font-semibold">
            <FontAwesomeIcon icon={faPlus} />
            Add a filter
          </p>
        </div>
      </section>
      <ReactECharts
        option={WaterfallOption}
        style={{ height: "100%", width: "100%" }}
      />
    </main>
  );
}

export default Hero;

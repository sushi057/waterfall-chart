import { faCalendarDay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactECharts from "echarts-for-react";

const WaterfallOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    // formatter: function (params: any) {
    //   const tar = params[1];
    //   return tar.name + "<br />" + tar.seriesName + " : " + tar.value;
    // },
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
      data: [
        {
          value: 0,
          label: {
            show: true,
            position: "left",
            formatter: [`{term|4.85K}`, `Starting`, `Headcount`].join("\n"),
            color: "#808080",
            align: "center",
            padding: [0, 120, 2, 2],
            rich: {
              term: {
                color: "#000",
                fontSize: 14,
                fontWeight: "bold",
              },
            },
          },
        },
        379,
        589,
        357,
        364,
        {
          value: 0,
          label: {
            show: true,
            position: "right",
            // align: "top",
            // verticalAlign: "top",
            padding: [5, 5, 380, 5],
            formatter: ["{term|5.23K}", "Finding", "Headcount"].join("\n"),
            color: "#808080",
            rich: {
              term: {
                color: "#000",
                fontSize: 14,
                fontWeight: "bold",
              },
            },
          },
        },
      ],
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

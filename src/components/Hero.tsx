import { faCalendarDay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactECharts from "echarts-for-react";

const WaterfallOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params: any) {
      const tar = params[1];
      return tar.name + "<br />" + tar.seriesName + " : " + tar.value;
    },
  },
  grid: {
    left: "3%",
    right: "4%",
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
      itemStyle: {
        borderColor: "transparent",
        color: "transparent",
      },
      data: [0, 379, 580, 360, 360, 0],
    },
    {
      name: "Net Change",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        position: "inside",
      },
      data: [379, 710, 705, 580, 367, 362],
    },
  ],
};

function Hero() {
  return (
    <main className="flex flex-1 flex-col p-6">
      <section>
        <p className="w-fit cursor-pointer rounded-sm border-2 p-1.5">
          Employee Movement Breakdown
        </p>
        <div className="mt-3 flex flex-row gap-8">
          <p className="flex cursor-pointer flex-row items-center gap-2 rounded-sm border-2 p-1.5">
            <FontAwesomeIcon icon={faCalendarDay} />
            2019
          </p>
          <p className="flex cursor-pointer flex-row items-center gap-2 border-2 p-1.5">
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

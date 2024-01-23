import ReactECharts from "echarts-for-react";
import data from "../data/data.json";

function Charts() {
  const keys = Object.keys(data[0]);
  // Extract subcategories and sales data from the JSON dynamically
  const subcategoryKey = keys.find((key) => key.includes("subcategory"));
  const sales2019Key = keys.find((key) => key.includes("d__2019sale"));
  const sales2021Key = keys.find((key) => key.includes("d__2021sale"));

  const subcategories: string[] = data.map((item) => item[subcategoryKey]);
  const sales2019: number[] = data.map((item) => item[sales2019Key].toFixed(0));
  const sales2021: number[] = data.map((item) => item[sales2021Key].toFixed(0));

  const labelRight = {
    position: "right",
  } as const;

  const differenceData = sales2021.map((value2019, index) => {
    const value2021 = sales2019[index];
    const difference = value2019 - value2021;
    return { value: difference, label: difference < 0 ? labelRight : null };
  });

  const horizontalBarGraphOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: [
      {
        left: "12%",
        right: "5%",
        width: "45%",
        top: "2%",
      },
      {
        top: "2%",
        left: "65%",
        rigth: "-20%",
        width: "30%",
      },
    ],
    xAxis: [
      {
        type: "value",
        axisLine: { show: true },
        axisLabel: {
          formatter: function (value: number) {
            return value;
          },
        },
        gridIndex: 0,
      },
      {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
        },
        boundaryGap: ["10%", "5%"],
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
        type: "category",
        data: subcategories,
        gridIndex: 0,
      },
      {
        type: "category",
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        gridIndex: 1,
      },
    ],
    series: [
      {
        name: "Sales 2019",
        type: "bar",
        data: sales2019,
        itemStyle: {
          color: "#4e73df",
        },
        label: {
          show: true,
          fontSize: 10,
          verticalAlign: "middle",
          position: "outside",
          formatter: "{c}",
          color: "#4e73df",
        },
        barMaxWidth: 25,
        barCategoryGap: "20%",
      },
      {
        name: "Sales 2021",
        type: "bar",
        data: sales2021,
        itemStyle: {
          color: "#e74a3b",
        },
        label: {
          show: true,
          fontSize: 10,
          verticalAlign: "middle",
          position: "outside",
          formatter: "{c}",
          color: "#e74a3b",
        },
        barMaxWidth: 25,
        barGap: "15%",
        barCategoryGap: "25%",
      },
      {
        name: "Difference",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          position: "outside",
          color: "#50C878",
          formatter: "{c}",
        },
        data: differenceData,
        itemStyle: {
          color: "#50C878",
        },
        xAxisIndex: 1,
        yAxisIndex: 1,
        barMaxWidth: 40,
      },
    ],
  };

  return (
    <div className="h-full w-full flex-1">
      <ReactECharts
        option={horizontalBarGraphOption}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

export default Charts;

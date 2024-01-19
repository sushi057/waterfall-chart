import ReactECharts from "echarts-for-react";

function Charts() {
  const labelRight = {
    position: "right",
  } as const;

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
        width: "35%",
        top: "2%",
        bottom: "20%"
      },
      {
        top: "2%",
        left: "55%",
        rigth: "-20%",
        width: "40%",
        bottom: "20%"
      },
    ],
    xAxis: [
      {
        type: "value",
        axisLine: { show: true },
        axisLabel: {
          formatter: function (value: number) {
            return value.toFixed(1) + "%";
          },
        },
        gridIndex: 0,
      },
      {
        type: "value",
        min: -20,
        max: 20,
        interval: 10,
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
        },
        boundaryGap: ["10%", "5%"],
        axisLabel: {
          formatter: function (value: number) {
            return value.toFixed(2) + " pp";
          },
        },
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
        type: "category",
        data: [
          "Product",
          "Office of CEO",
          "Marketing",
          "Customer Support",
          "Finance",
          "HR",
          "IT",
          "Sales",
          "Operations",
        ],
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
        name: "Blue",
        type: "bar",
        data: [9.37, 11, 11.9, 12.3, 12.5, 12.9, 13.7, 15.3, 16.6],
        itemStyle: {
          color: "#4e73df",
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{c}%",
          color: "#4e73df",
        },
        barMaxWidth: 25,
        barCategoryGap: "20%",
      },
      {
        name: "Red",
        type: "bar",
        data: [8.59, 0, 10.9, 12, 9.27, 20.8, 11.6, 18.1, 16.6],
        itemStyle: {
          color: "#e74a3b",
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{c}%",
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
          formatter: "{c} pp",
        },
        data: [
          { value: 0.78 },
          { value: 11.0 },
          { value: 1.08 },
          { value: 0.34 },
          { value: 3.2 },
          { value: -7.9, label: labelRight },
          { value: 2.04 },
          { value: -2.87, label: labelRight },
          { value: 0.1 },
        ],
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

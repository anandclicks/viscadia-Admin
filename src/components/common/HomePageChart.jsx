import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip
);

const monthMap = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export default function HomePageChart({ data = [] }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(0, 123, 255, 0.6)");
    gradient.addColorStop(0.4, "rgba(0, 123, 255, 0)");
    gradient.addColorStop(0.7, "rgba(0, 123, 255, 0)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    // Prepare labels and dataset
    const labels = data.map((el) => monthMap[el.month] || el.month);
    const datasetData = data.map((el) => el.users);

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data: datasetData,
            fill: true,
            backgroundColor: gradient,
            borderColor: "#0096FF",
            borderWidth: 2,
            pointBackgroundColor: "#0096FF",
            pointRadius: 0,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "nearest",
          intersect: false,
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              padding: 20,
              font: { size: 17, weight: "500" },
              color: "#000",
            },
            grid: {
              color: "rgba(0,0,0,0.05)",
              drawTicks: false,
            },
            border: { display: false },
          },
          x: {
            ticks: {
              padding: 20,
              font: { size: 17, weight: "500" },
              color: "#000",
            },
            grid: { display: false, drawTicks: false },
            border: { display: false },
          },
        },
      },
      plugins: [
        {
          id: "hoverLine",
          afterDraw: (chart) => {
            if (chart.tooltip._active && chart.tooltip._active.length) {
              const ctx = chart.ctx;
              const activePoint = chart.tooltip._active[0].element;
              const x = activePoint.x;
              const topY = chart.scales.y.top;
              const bottomY = chart.scales.y.bottom;

              ctx.save();
              ctx.beginPath();
              ctx.setLineDash([5, 5]);
              ctx.moveTo(x, topY);
              ctx.lineTo(x, bottomY);
              ctx.lineWidth = 2;
              ctx.strokeStyle = "#0096FF";
              ctx.stroke();
              ctx.restore();
            }
          },
        },
      ],
    });

    return () => chartInstanceRef.current?.destroy();
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height: "270px",
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

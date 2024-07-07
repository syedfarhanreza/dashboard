// Example data for the bars (replace with actual data)
const data = [
  35, 52, 44, 27, 35, 30, 44, 27, 35, 52, 44, 27, 35, 30, 44, 35, 52, 44, 27,
  35, 60, 44,
];

// Determine the highest value in the data
const maxValue = Math.max(...data);

const barChart = document.getElementById("barChart");

data.forEach((value) => {
  const bar = document.createElement("div");
  bar.classList.add("w-6", "bar");
  bar.style.height = `${value}%`;
  bar.style.backgroundColor = "#157AFF";
  if (value !== maxValue) {
    bar.style.opacity = "0.5";
  }
  barChart.appendChild(bar);
});

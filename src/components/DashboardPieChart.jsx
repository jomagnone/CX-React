
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  
  datasets: [
    {
      label: " Q Iniciativas",
      
      data: [2, 6, 17, 25, 23],
      backgroundColor: [
        "#E74A3A98",
        "#F6C23D98",
        "#4E73DF98",
        "#37B9CC98",
        "#1CC88A98"
      ],
      borderColor: [
        "#E74A3A",
        "#F6C23D",
        "#4E73DF",
        "#37B9CC",
        "#1CC88A"
      ],
      borderWidth: 1
    }
  ],

};

function DashboardPieChart() {
  return <Pie className = "PieChart" data={data} />;
}

export default DashboardPieChart;
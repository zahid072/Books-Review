import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";
import useFilterData from "../../Hooks/useFilterData";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "#15799D"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const TriangleChart = () => {
  const { filteredData } = useFilterData();
  
  return (
    <>
      {
        filteredData.length>0 && (
          <BarChart
        width={1000}
        height={500}
        data={filteredData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
        )
      }
      {
        filteredData.length === 0 && (
          <img className="md:size-[400px] size-72" src="https://i.ibb.co/LkMP19m/page-empty.png" alt="" />
        )
      }
    </>
  );
};

export default TriangleChart;

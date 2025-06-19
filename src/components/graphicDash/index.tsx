
import { ApexOptions } from "apexcharts";
import { memo } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { COLORS_DARK, COLORS_LIGHT } from "../../type/dashColors";
import Chart from "../extras/Chart";

interface DashGraphic{
    labels: string[]
    series:ApexOptions['series']
    colors?: any
    height?: string


}


const GraphicDash = ({ labels, series, colors}: DashGraphic) => {
    const { darkModeStatus } = useDarkMode()
  
    return (
      <Chart
        className='pb-3'
        height={380}
        options={{
          chart: {
            type: 'pie',
            width: 380
          },
          stroke: {
            width: 0,
          },
          labels,
          dataLabels: {
            enabled: true,
          },
          legend: {
            show: false,
          },
          colors: colors ? colors
            : [
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).PRIMARY,
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).SECONDARY,
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).SUCCESS,
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).INFO,
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).WARNING,
              (darkModeStatus ? COLORS_DARK : COLORS_LIGHT).DANGER,
            ]
        }}
        series={series}
        type="pie"
      />
    );
  }
  
  export default memo(GraphicDash);
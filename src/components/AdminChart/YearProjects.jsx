import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const YearProjects = () => {
         const options = {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Number of User "
            },
            axisY: {
                title: "Number of User"
            },
            data: [
            {
                type: "area",
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0.## Million",
                dataPoints: [
                    { x: new Date(2017, 0), y: 176},
                    { x: new Date(2016, 0), y: 173},
                    { x: new Date(2015, 0), y: 164},
                    { x: new Date(2014, 0), y: 153},
                    { x: new Date(2013, 0), y: 145},
                    { x: new Date(2012, 0), y: 138},
                    { x: new Date(2011, 0), y: 132}
                ]
            }
            ]
        }
  return (
    <CanvasJSChart options = {options} />
  )
}

export default YearProjects
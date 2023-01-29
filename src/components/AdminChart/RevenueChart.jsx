import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const RevenueChart = () => {
    const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", //"light1", "dark1", "dark2"
            title:{
                text: "Total revenue earned based on year"
            },
            axisY: {
                includeZero: true
            },
            data: [{
                type: "column", 
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                xValueFormatString: "YYYY",
                dataPoints: [
                    { x: new Date(2011, 0), y: 71 },
                    { x: new Date(2012, 1), y: 55 },
                    { x: new Date(2013, 0), y: 50 },
                    { x: new Date(2014, 0), y: 65 },
                    { x: new Date(2015, 0), y: 71 },
                    { x: new Date(2016, 0), y: 68 },
                    { x: new Date(2017, 0), y: 92, indexLabel: "Highest" },
                ]
            }]
        }
  return (
    <CanvasJSChart options={options} />
  )
}

export default RevenueChart
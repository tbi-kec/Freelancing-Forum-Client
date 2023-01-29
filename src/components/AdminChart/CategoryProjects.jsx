import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CategoryProjects = () => {
       const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Projects"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Mechanical CAD" },
                    { y: 49, label: "3D printing and design" },
                    { y: 9, label: "Mechanical Fabrication work" },
                    { y: 5, label: "IoT" },
                    { y: 19, label: "Circuit design and fabrication" },
                    { y: 53, label: "Embedded Systems Simulation and Fabrication" },
                    { y: 25, label: "Application creation using python" },

                ]
            }]
        }
  return (
   <CanvasJSChart options = {options}/>
  )
}

export default CategoryProjects
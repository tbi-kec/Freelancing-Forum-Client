import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const DepartmentUsersChart = () => {
      const addSymbols=(e)=>{
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
     const options = {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Total Number of Freelancer on departments"
            },
            axisX: {
                title: "Departments",
                reversed: true,
            },
            axisY: {
                title: "Number of user",
                includeZero: true,
                labelFormatter: addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: [
                    { y:  2200000000, label: "IT" },
                    { y:  1800000000, label: "AI&DS" },
                    { y:  800000000, label: "AI&ML" },
                    { y:  563000000, label: "CSD" },
                    { y:  376000000, label: "Mech" },
                    { y:  336000000, label: "ESE" },
                    { y:  330000000, label: "EEE" }
                ]
            }]
        }
  return (
    <CanvasJSChart options = {options} />
  )
}

export default DepartmentUsersChart
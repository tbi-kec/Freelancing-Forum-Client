import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Adminchart extends Component {
    render() {
        const options1 = {
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
                labelFormatter: this.addSymbols
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
        const options2 = {
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
        const options3 = {
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
        const options4 = {
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
        
        <div className='container'>
        <div className="row p-5">
            <CanvasJSChart options = {options1} className="my-5"
            />
        </div>
            <div className="row">
                <div className="col-md-6 p-3">
                <CanvasJSChart options = {options2}
            />
                </div>
                <div className="col-md-6 p-3">
                <CanvasJSChart options = {options3}
            />
                </div>
            </div>
           <div className="row p-5">
            <CanvasJSChart options = {options4}
            />

           </div>
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        );
    }
    addSymbols(e){
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}

export default  Adminchart;  
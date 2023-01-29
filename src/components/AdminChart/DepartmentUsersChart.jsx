import React, { useEffect, useLayoutEffect,useState } from 'react'

import { useSelector } from 'react-redux';

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
    const users = useSelector((state)=>(state.userReducer))
    const[count,setCount]=useState([]); 
      useEffect(()=>{
      if(users!==null && users.data!=null){ 
        let freelacerMap = new Map();
        for(let i=0;i<users.data.length;i++){
            let dept = users.data[i].department;
            if(users.data[i].user_type==='freelancer')
                if(freelacerMap.has(dept)){
                    let temp=freelacerMap.get(dept);
                    freelacerMap.delete(dept);
                    freelacerMap.set(dept,temp+1)
                }else{
                    freelacerMap.set(dept,1);
                }
                }
        console.log(freelacerMap)
        for(let [key,value] of freelacerMap){
            let obj = {
                y:value ,
                label:key
            }
            setCount([...count,obj])
        }
      }
  },[users])
  console.log(count)
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
                dataPoints: count
            }]
        }
  return (
    <> {count.length!==0 &&<CanvasJSChart options = {options}/>}  </>
  )
}

export default DepartmentUsersChart


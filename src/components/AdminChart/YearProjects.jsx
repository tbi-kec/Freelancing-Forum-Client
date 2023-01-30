import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const YearProjects = () => {
        const projects = useSelector((state)=>(state.projectReducer));
        const [count,setCount]=useState();
        const [dis,setDis]=useState(false)
        const [options,setOptions]=useState()
        useLayoutEffect(()=>{
            if(projects && projects.data){
                let map = new Map();
                for(let i=0;i<projects.data.length;i++){
                    let d = new Date(projects.data[i].created_on)
                    let currentYear =d.getFullYear();
                    if(map.has(currentYear)){
                        let temp = map.get(currentYear)+1;
                        map.delete(currentYear);
                        map.set(currentYear,temp)
                    }else{
                        map.set(currentYear,1);
                    }
                }
                let arr=[];
                for(let [key,value] of map){
                    let obj = {
                        x:key,
                        y:value,
                    }
                    arr.push(obj);
                }
                setCount(arr);
                setDis(true);
            }
        },[projects])
        useEffect(()=>{
            if(dis && count.length){
                    setOptions({
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
                    xValueFormatString: "#",
                    yValueFormatString: "#",
                    dataPoints:count
                }
                ]
                    })
                }
        },[dis,count])
         
  return (
   <>{dis && <CanvasJSChart options = {options} /> } </> 
  )
}

export default YearProjects
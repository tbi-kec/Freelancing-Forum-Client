import React,{useLayoutEffect, useState} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CategoryProjects = () => {
        const projects = useSelector((state)=>(state.projectReducer));
        const [count,setCount]=useState();
        const [dis,setDis]=useState(false);
        const [options,setOptions]=useState({})

        useLayoutEffect(()=>{
            if(projects!==null && projects.data!==null){
                let map = new Map();
                for(let i=0;i<projects.data.length;i++){
                    let category = projects.data[i].category;
                    if(map.has(category)){
                        let temp = map.get(category)+1;
                        map.delete(category);
                        map.set(category,temp);
                    }else{
                        map.set(category,1);
                    }
                }
                let arr=[]
                for(let [key,value] of map){
                    let obj = {
                        y:value,
                        label:key,
                    }
                    arr.push(obj);
                }
                setCount(arr);
                setDis(true)
            }
        },[projects])
        useEffect(()=>{
            if(dis && count.length){
                setOptions({
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
                dataPoints: count
            }]
                })
            }
        },[dis])
      
  return (
     <>{dis && <CanvasJSChart options = {options}/> }</> 
  )
}

export default CategoryProjects
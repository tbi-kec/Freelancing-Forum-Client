import React,{useEffect,useLayoutEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const RevenueChart = () => {
     const projects = useSelector((state)=>(state.projectReducer));
        const [count,setCount]=useState();
        const [dis,setDis]=useState(false);
        const [options,setOptions]=useState({})
        
        useLayoutEffect(()=>{
            if(projects!==null && projects.data!==null){
                let map = new Map();
                for(let i=0;i<projects.data.length;i++){
                    let status =  projects.data[i].project_status
                    let d = new Date(projects.data[i].completed_on);
                    let amount = projects.data[i].stipend
                    let date =  d.getFullYear();
                    if(status==="completed"){
                        if(map.has(date)){
                        let temp = map.get(date)+amount;
                        map.delete(date);
                        map.set(date,temp);
                    }else{
                        map.set(date,amount);
                    }
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
                dataPoints: count
            }]
                })
            }
        },[dis,count])
  return (
   <> {dis && <CanvasJSChart options={options} /> }</>
  )
}

export default RevenueChart
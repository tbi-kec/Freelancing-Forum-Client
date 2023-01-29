import React, { useLayoutEffect,useState } from 'react'
import { useEffect } from 'react';

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
    const [options,setOptions]=useState({})
    const users = useSelector((state)=>(state.userReducer))
    const[count,setCount]=useState([]); 
    const [dis,setDis]=useState(false);
      useLayoutEffect(()=>{
      if(users!==null && users.data!=null){ 
        let freelancerMap = new Map();
        for(let i=0;i<users.data.length;i++){
            let dept = users.data[i].department;
            if(users.data[i].user_type==='freelancer')
                if(freelancerMap.has(dept)){
                    let temp=freelancerMap.get(dept);
                    freelancerMap.delete(dept);
                    freelancerMap.set(dept,temp+1)
                }else{
                    freelancerMap.set(dept,1);
                }
                }
       let arr=[]
        for(let [key,value] of freelancerMap){
           
            let obj = {
                y:value ,
                label:key
            }
            arr.push(obj);
        }
        setCount(arr)
        setDis(true)
      }
  },[users])

  useEffect(()=>{
        if(dis && count.length!==0 ){
            setOptions({
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
                dataPoints: dis && count
            }]
            })
        }
  },[dis,count])
  
    //  const options = {
    //         animationEnabled: true,
    //         theme: "light2",
    //         title:{
    //             text: "Total Number of Freelancer on departments"
    //         },
    //         axisX: {
    //             title: "Departments",
    //             reversed: true,
    //         },
    //         axisY: {
    //             title: "Number of user",
    //             includeZero: true,
    //             labelFormatter: addSymbols
    //         },
    //         data: [{
    //             type: "bar",
    //             dataPoints: dis && count
    //         }]
    //     }
  return (
    <> {dis &&<CanvasJSChart options = {options}/>}  </>
  )
}

export default DepartmentUsersChart


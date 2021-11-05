import React from 'react';
import { Bar,Pie } from 'react-chartjs-2';

function createData(labels=['January', 'February', 'March','April', 'May'],data= [65, 59, 80, 81, 56]){
    const state = {
        labels:labels,
        datasets: [
            {
                label: 'Biểu đồ họ động vật và loài ',
                fill: false,
                lineTension: 0.5,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
    
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: data
            }
        ]
    }
    return state
}

export default function Diagram({labels,data}){
        let arrLabel,arrData = []
        if(labels){
            arrLabel = labels.map((item)=>{
                arrData.push(data.filter(element=>element.ma_ho===item.ma_ho).length)
                return item.ten_ho
            })
        }

        return (
            <div >
                <Bar
                    data={createData(arrLabel,arrData)}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        animations: {
                            tension: {
                              duration: 10000,
                              easing: 'linear',
                              from: 1,
                              to: 0,
                              loop: true
                            }
                          },
                        responsive:true
                        
                    }}
                />
                
            </div>
        )
}

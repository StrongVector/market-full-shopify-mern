
"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const ResonChart = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['نهب مسلح','سرقه','غير'],
            datasets: [
                {
                    label: 'سبب الفقدان',
                    data: [412,817, 52],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card w-80 text-xl  bg-white p-3 ">
            <Chart  className='h-full w-[240px] md:w-80' type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        
 

export default ResonChart
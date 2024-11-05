import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticsChart = () => {
    const option = {
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)", // Background color
            borderWidth: 0,
            textStyle: {
                color: 'white', // Change tooltip text color to white for better contrast
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },

        xAxis: {
            type: "category",
            data: ["Members"], // Single category
            axisLabel: {
                color: 'white', // Change to desired text color
            },
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: 'white', // Change to desired text color
            },
        },
        series: [
            {
                name: "Total Members",
                type: "bar",
                data: [200], // Total number of members
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'red' }, // Start color for the Members bar
                        { offset: 1, color: 'darkred' } // End color for the Members bar
                    ]),
                    borderColor: 'black', // Border color
                    borderWidth: 2, // Border width
                    borderType: 'solid', // Solid border
                },
                barWidth: '20%', // Bar width
                // Setting the bar's position to offset it slightly
                itemStyle: {
                    normal: {
                        barBorderRadius: [0, 0, 5, 5],
                    },
                },
                // Add offset to position it correctly in the group
                emphasis: {
                    itemStyle: {
                        color: 'darkred',
                    },
                },
            },
            {
                name: "Members with Coaching",
                type: "bar",
                data: [75], // Total number of members with coaching
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'blue' }, // Start color for the Members with Coaching bar
                        { offset: 1, color: 'darkblue' } // End color for the Members with Coaching bar
                    ]),
                    borderColor: 'black', // Border color
                    borderWidth: 2, // Border width
                    borderType: 'solid', // Solid border
                },
                barWidth: '20%', // Bar width
                // Setting the bar's position to offset it slightly
                itemStyle: {
                    normal: {
                        barBorderRadius: [0, 0, 5, 5],
                    },
                },
                // Add offset to position it correctly in the group
                emphasis: {
                    itemStyle: {
                        color: 'darkblue',
                    },
                },
            },
        ],
    };

    return (
        <ReactECharts option={option} />
    );
};

export default StatisticsChart;

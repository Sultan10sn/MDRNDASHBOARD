import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const Chartbar = () => {

    const data = [
        {
            day: "Monday",
            degress: 59
        },
        {
            day: "Tuesday",
            degress: 61
        },
        {
            day: "Wednesday",
            degress: 55
        },
        {
            day: "Thursday",
            degress: 78
        },
        {
            day: "Friday",
            degress: 71
        },
        {
            day: "Saturday",
            degress: 56
        },
        {
            day: "Sunday",
            degress: 67
        }
    ];

    return (
        <ResponsiveBar
            data={data}
            keys={["degress"]}
            indexBy="day"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="red"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Total Num of Reports",
                legendPosition: "middle",
                legendOffset: -40
            }}
        />
    )
}

export default Chartbar
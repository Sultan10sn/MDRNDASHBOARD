import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const Chartbar = ({ data }) => {

    return (
        <ResponsiveBar
            data={data}
            keys={["degress"]}
            indexBy="day"
            margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
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
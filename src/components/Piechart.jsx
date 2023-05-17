import React from 'react'
import { ResponsivePie } from '@nivo/pie';

const Piechart = ({ data }) => {


    return (
        <>
            <div className='flex flex-col items-center h-72'>
                <ResponsivePie
                    data={data}
                    margin={{ top: 50, right: 80, bottom: 60, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                />
                <p className='font-bold leading-normal text-gray-800'>Overview({data.length})</p>
            </div>
        </>
    )
}

export default Piechart
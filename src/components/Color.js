import React from 'react';

const Color = (props) => {
    const { colorData, setColor } = props;
    return (
        <ul className="colors ps-0">
            {colorData &&
                colorData?.map((item, index) => (
                    <li onClick={() => setColor(item._id)} key={index} style={{ background: item.name }}></li>
                ))}
        </ul>
    );
};

export default Color;

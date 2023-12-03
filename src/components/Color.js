import React from 'react';

const Color = (props) => {
    const { colorData, setColor, setBorder, border } = props;
    return (
        <ul className="colors ps-0">
            {colorData &&
                colorData?.map((item, index) => (
                    <li
                        onClick={() => {
                            setColor && setColor(item._id);
                            setBorder && setBorder(item._id);
                        }}
                        key={index}
                        style={{ background: item.name, border: border === item._id ? '3px solid #1e90ff' : 'none' }}
                    ></li>
                ))}
        </ul>
    );
};

export default Color;

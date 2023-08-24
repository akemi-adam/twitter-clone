import React from 'react';


interface Props {
    classes: string,
    labelText: string
}

const FlashyButton: React.FC<Props> = ({ classes, labelText }) =>
{
    return (
        <button className={`rounded-full font-bold delay-100 text-white bg-sky-500 hover:bg-sky-600 ${classes}`}>
            {labelText}
        </button>
    )
}
    

export default FlashyButton
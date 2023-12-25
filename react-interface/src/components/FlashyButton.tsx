import React from 'react';


interface Props {
    classes: string,
    labelText: string,
    action?: any
}

const FlashyButton: React.FC<Props> = ({ classes, labelText, action }) =>
{
    return (
        <button className={`rounded-full font-bold delay-100 text-white bg-sky-500 hover:bg-sky-600 ${classes}`} onClick={() => action()}>
            {labelText}
        </button>
    )
}
    

export default FlashyButton
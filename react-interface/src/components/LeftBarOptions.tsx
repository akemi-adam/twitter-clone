import React from 'react';


interface Props {
    icon: string,
    altText: string,
    labelText: string
}

const LeftBarOptions: React.FC<Props> = ({ icon, altText, labelText }) =>
{
    return (
        <button className='rounded-full pl-2 py-2 hover:bg-zinc-900 delay-100'>
            <div className='flex flex-row gap-x-5'>
                    <img src={icon} alt={altText} className='h-7'/>
                    <span>{ labelText }</span>
                </div>
        </button>
    )
}

export default LeftBarOptions
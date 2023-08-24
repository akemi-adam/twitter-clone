import React from "react"


interface Props {
    labelText: string,
    isActive: boolean,
    onSelected: any
}

const ContentButton: React.FC<Props> = ({ labelText, isActive, onSelected }) =>
{
    return (
        <button className='py-4 w-full hover:bg-zinc-900 delay-100' onClick={() => onSelected()}>
            <div className='flex flex-col justify-between'>
                <span className='text-gray-500'>{ labelText }</span>
                { isActive && <hr className="mx-auto w-[4.5rem] border-2 rounded-full border-sky-400"/> }
            </div>
        </button>
    )
}

export default ContentButton
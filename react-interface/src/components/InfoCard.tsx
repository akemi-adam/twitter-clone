import React from "react"


interface Classes {
    flex?: string
    h3?: string
}

interface Props {
    title: string
    classes?: Classes
    children?: | JSX.Element | JSX.Element[] | string | string[]
}

const InfoCard: React.FC<Props> = ({ title, classes = { flex: '', h3: '' }, children }) =>
{
    return (
        <div className={`rounded-2xl flex flex-col gap-y-3 bg-zinc-800 ${classes.flex}`}>
            <h3 className={`text-xl text-white font-bold ${classes.h3}`}>{ title }</h3>
            { children }
        </div>
    )
}

export default InfoCard
import React from "react"

import SearchInput from "./SearchInput"


const RightBar: React.FC = () =>
{
    return (
        <div className="flex flex-col gap-y-3 ml-8 mt-4">
            <SearchInput />
            <div className="rounded-2xl flex flex-col gap-y-2 p-3 bg-zinc-800">
                <h3 className="text-white font-bold">Assine o Premium</h3>
                <p className="text-white font-semibold text-justify">
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </p>
                <button className="rounded-full w-32 p-1 font-bold text-white bg-sky-500">Inscreva-se</button>
            </div>
            <div className="rounded-2xl flex flex-col gap-y-3 p-3 bg-zinc-800">
                <h3 className="text-white font-bold">O que está acontecendo</h3>
                <div className="flex flex-col gap-y-1">
                    <h6 className="text-gray-500"><a href="#">Campeonato Brasileiro ⋅ há 3 horas</a></h6>
                    <h5 className="text-white font-semibold"><a href="#">Coritiba x Flamengo</a></h5>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h6 className="text-gray-500">Assuntos do momento</h6>
                    <h5 className="text-white font-semibold">Emma Myers</h5>
                    <h6 className="text-gray-500">11,5 mil posts</h6>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h6 className="text-gray-500">Assuntos do momento</h6>
                    <h5 className="text-white font-semibold">Sukuna</h5>
                    <h6 className="text-gray-500">7.523 posts</h6>
                </div>
                <div className="flex flex-col gap-y-1">
                    <h6 className="text-gray-500">Assuntos do momento</h6>
                    <h5 className="text-white font-semibold">Jennifer Lawrance</h5>
                    <h6 className="text-gray-500">77.7 mil posts</h6>
                </div>
                <a href="#" className="text-sky-500">Mostrar mais</a>
            </div>
        </div>
    )
}

export default RightBar
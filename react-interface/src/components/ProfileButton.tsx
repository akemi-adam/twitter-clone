import React from "react"

import verticalDotsIcon from './../assets/sidebar/dots-3.svg'


interface Props {
    image: string
    name: string,
    username: string,
}

const ProfileButton: React.FC<Props> = ({ image, name, username }) =>
{
    return (
        <div className="mb-10 py-2 pl-3 rounded-full hover:bg-zinc-900 delay-100">
            <button className="flex flex-row gap-x-4 rounded-full w-full">
                <img src={image} alt="Ícone de perfil do usuário logado" className="h-12 rounded-full"/>
                <div className="flex flex-col">
                    <h6 className="font-bold text-white">{name}</h6>
                    <h6 className="text-gray-500">{username}</h6>
                </div>
                <img src={verticalDotsIcon} alt="Ícone de opções" className="h-4 my-auto"/>
            </button>
        </div>
    )
}

export default ProfileButton
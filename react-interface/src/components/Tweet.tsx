import React from "react"

import commentIcon from './../assets/icons/comment-1.svg'
import retweetIcon from './../assets/icons/retweet-1.svg'
import likeIcon from './../assets/icons/like-1.svg'
import viewsIcon from './../assets/icons/views-1.svg'
import downloadIcon from './../assets/icons/download-1.svg'


interface Props {
    profileImage: string,
    content: string
}

const Tweet: React.FC<Props> = ({ profileImage, content }) =>
{
    return (
        <div className="flex flex-row justify-between gap-x-4 px-4 mt-4 mb-2 border-b-1 border-zinc-600">
            <img src={profileImage} alt="Ícone de perfil do usuário" className="h-12 rounded-full"/>
            <div className="flex flex-col flex-auto">
                <h6 className="flex flex-row justify-between">
                    <div className="flex-row gap-x-3">
                        <span className="font-bold text-white">akemi.tsx</span>
                        <span className="text-gray-500">@akemidev · 7 s</span>
                    </div>                        
                    <button type="button">
                        <img src="./assets/sidebar/dots-4.svg" alt="Ícone de opções" className="h-5"/>
                    </button>
                </h6>
                <p className="text-white">
                    { content }
                    {/* Tailwind is best css framework! Change my mind 😎 */}
                </p>
                
                <div className="flex flex-row justify-between my-3">
                    <div>
                        <img src={commentIcon} alt="Ícone de comentário" className="h-[1rem]"/>
                    </div>
                    <div>
                        <img src={retweetIcon} alt="Ícone de retweet" className="h-[1.3rem]"/>
                    </div>
                    <div>
                        <img src={likeIcon} alt="Ícone de curtir" className="h-[1.3rem]"/>
                    </div>
                    <div>
                        <img src={viewsIcon} alt="Ícone de visualizações" className="h-[1.1rem]"/>
                    </div>
                    <div>
                        <img src={downloadIcon} alt="Ícone de download" className="h-[1.3rem]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
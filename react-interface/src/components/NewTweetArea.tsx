import React, { useState } from "react"

import FlashyButton from "./FlashyButton"

import imageIcon  from './../assets/icons/image-1.svg'
import gifIcon from './../assets/icons/gif-1.svg'
import listIcon from './../assets/icons/list-3.svg'
import smileIcon from './../assets/icons/smile-1.svg'
import calendarIcon from './../assets/icons/calendar-1.svg'
import locationIcon from './../assets/icons/location-1.svg'


interface Props {
    profileImage: string,
    createNewTweet: any
}

const NewTweetArea: React.FC<Props> = ({ profileImage, createNewTweet }) =>
{
    const [ content, setContent ] = useState<string>('')

    return (
        <div className="flex flex-row gap-x-4 m-4">
            <img src={ profileImage } alt="Ícone de perfil do usuário logado" className="h-12 rounded-full"/>
            <div className="flex flex-col flex-auto gap-y-4">
                <textarea name="tweet" id="tweet" placeholder="O que está acontecendo?" className="resize-vertical placeholder:text-xl placeholder:text-gray-500 text-white bg-black"></textarea>
                <div className="flex flex-row justify-between col-span-2">
                    <div className="flex flex-row gap-x-3 my-auto">
                        <img src={imageIcon} alt="Ícone de upload de imagem" className="h-5"/>
                        <img src={gifIcon} alt="Ícone de upload de GIF" className="h-5"/>
                        <img src={listIcon} alt="Ícone de lista para enquete" className="h-5"/>
                        <img src={smileIcon} alt="Ícone de emoji smile" className="h-5"/>
                        <img src={calendarIcon} alt="Ícone de calendário para programar um tweet" className="h-5"/>
                        <img src={locationIcon} alt="Ícone de localização" className="h-5"/>
                    </div>
                    <FlashyButton classes="w-20 p-1" labelText='Postar' action={(content: string) => createNewTweet(content)}/>
                </div>
            </div>
        </div>
    )
}

export default NewTweetArea
import React, { useState, useEffect } from "react"

import ContentButton from "./ContentButton"
import NewTweetArea from "./NewTweetArea"
import Tweet from "./Tweet"
import TweetType from "../types/TweetType"

import profileImage from './../assets/user/profile-icon.jpg'


const MainContent: React.FC = () =>
{
    const [ contentIsActivated, setContentActivated ] = useState<boolean>(true)

    const [ tweets, setTweets ] = useState<Array<TweetType>>([])

    /* useEffect(() => {
        
    }, [tweets]) */

    const createNewTweet = (content: string) => {
        fetch('http://localhost:8000/tweet', {
            method: 'POST',
            body: JSON.stringify([content]),
            headers: { "Content-type": "application/json" }
        }).then(
            response => response.json()
        ).then((tweet: TweetType) => {
            const newTweet: Array<TweetType> = [ { content: tweet.content } ]
            setTweets([...tweets, ...newTweet])
        })
    }

    return (
        <div className="flex flex-col col-span-2 border-x-1 border-zinc-600 pt-4">
            <div className="border-b-1 border-zinc-600">
                <h2 className="ml-4 mb-4 text-xl font-bold text-white">Página Inicial</h2>
                <div className="flex flex-row border-b-1 border-zinc-600">
                    <ContentButton
                        labelText='Para você'
                        isActive={contentIsActivated}
                        onSelected={() => setContentActivated(true)}
                    />
                    <ContentButton
                        labelText='Seguindo'
                        isActive={!contentIsActivated}
                        onSelected={() => setContentActivated(false)}
                    />
                </div>
                <NewTweetArea profileImage={profileImage} createNewTweet={(content: string) => createNewTweet(content)}/>        
            </div>
            {tweets.map((tweet: TweetType) => <Tweet profileImage={profileImage} content={tweet.content}/>)}
            {/* <Tweet profileImage={profileImage} content={}/> */}
        </div>
    )
}

export default MainContent
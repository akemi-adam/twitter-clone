import React from "react"


interface Props {
    category: string
    topic: string
    topicLink: string
    postsNumber: string
}

const TrendCard: React.FC<Props> = ({ category, topic, topicLink, postsNumber }) =>
{
    return (
        <a href={topicLink}>
            <div className="flex flex-col gap-y-1 px-3 py-1 hover:bg-zinc-700 delay-100">
                <h6 className="text-sm text-gray-500">{ category }</h6>
                <h5 className="text-sm text-white font-semibold">{ topic }</h5>
                { postsNumber && <h6 className="text-sm text-gray-500">{ postsNumber } posts</h6> }
            </div>
        </a>
    )
}

export default TrendCard
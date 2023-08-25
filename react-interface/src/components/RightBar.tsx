import React from "react"

import FlashyButton from "./FlashyButton"
import InfoCard from "./InfoCard"
import SearchInput from "./SearchInput"
import TrendCard from "./TrendCard"


const RightBar: React.FC = () =>
{
    return (
        <div className="flex flex-col gap-y-3 ml-8 mt-4">
            <SearchInput />
            <InfoCard title="Assine o Premium" classes={{ flex: 'p-3' }}>
                <p className="text-sm text-white font-semibold text-justify">
                Assine para desbloquear novos recursos e, se elegível, receba uma parte da receita dos anúncios.
                </p>
                <FlashyButton classes="w-32 p-1" labelText="Inscreva-se" />
            </InfoCard>
            <InfoCard title="O que está acontecendo" classes={{ flex: 'py-3', h3: 'ml-3' }}>
                <TrendCard category="Campeonato Brasileiro ⋅ há 3 horas" topic="Coritiba x Flamengo" postsNumber="" topicLink="#" />
                <TrendCard category="Assuntos do momento" topic="Emma Myers" postsNumber="11,5" topicLink="#" />
                <TrendCard category="Anime - Assuntos do momento" topic="Sukuna" postsNumber="7.523" topicLink="#" />
                <TrendCard category="Assuntos do momento" topic="Jennifer Lawrance" postsNumber="77,7 mil" topicLink="#" />
                <a href="#" className="ml-3 text-sky-500 hover:underline">Mostrar mais</a>
            </InfoCard>
        </div>
    )
}

export default RightBar
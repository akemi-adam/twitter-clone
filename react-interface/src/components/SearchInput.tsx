import React, { ChangeEvent, useState } from 'react'


import searchIcon from './../assets/sidebar/search-3.svg'


const SearchInput: React.FC = () =>
{
    const [ seek, setSeek ] = useState<string>('')
    const [ closeIcon, setCloseIcon ] = useState<boolean>(false);

    const setSearch = (seek: string, closeIconActivated: boolean) => {
        setSeek(seek)
        setCloseIcon(closeIconActivated)
    }

    return (
        <div className="rounded-full flex flex-row py-3 pl-2 bg-zinc-800">
            <div>
                <img src={searchIcon} alt="Ícone de procura" className="h-6"/>
            </div>
            <input
                type="text"
                placeholder="Buscar"
                className="ml-4 outline-none text-white bg-zinc-800"
                value={seek}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value, e.target.value !== '')}
            />
            { closeIcon &&
                <button onClick={() => setSearch('', false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill='#ffffff'/>
                    </svg>
                </button>
            }
        </div>
    )
}

export default SearchInput
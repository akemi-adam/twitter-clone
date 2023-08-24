import { FunctionComponent } from 'react';

import LeftBarOptions from './LeftBarOptions';
import FlashyButton from './FlashyButton';
import ProfileButton from './ProfileButton';

import xLogoIcon from './../assets/x-white.png'
import homeIcon from './../assets/sidebar/home-1.svg'
import searchIcon from './../assets/sidebar/search-1.svg'
import bellIcon from './../assets/sidebar/bell-1.svg'
import mailIcon from './../assets/sidebar/mail-1.svg'
import listIcon from './../assets/sidebar/list-1.svg'
import bookmarkIcon from './../assets/sidebar/bookmark-1.svg'
import verifyIcon from './../assets/sidebar/verify-1.svg'
import profileIcon from './../assets/sidebar/profile-1.svg'
import dotsIcon from './../assets/sidebar/dots-1.svg'
import profileImage from './../assets/user/profile-icon.jpg'


const LeftBar: FunctionComponent = () =>
{
    return (
        <div className="flex flex-col justify-between mr-8 mt-4">
            <div className="flex flex-col gap-y-2 text-xl text-white">
                <div className='ml-3'>
                    <a href="#">
                        <img src={xLogoIcon} alt="Ícone do Twitter" className="w-6"/>
                    </a>
                </div>
                <LeftBarOptions icon={homeIcon} altText='Ícone Home' labelText='Página Inicial'/>
                <LeftBarOptions icon={searchIcon} altText='Ícone de procura' labelText='Explorar'/>
                <LeftBarOptions icon={bellIcon} altText='Ícone de notificação' labelText='Notificações'/>
                <LeftBarOptions icon={mailIcon} altText='Ícone de messagem' labelText='Mensagens'/>
                <LeftBarOptions icon={listIcon} altText='Ícone de lista' labelText='Listas'/>
                <LeftBarOptions icon={bookmarkIcon} altText='Ícone de itens salvos' labelText='Itens salvos'/>
                <LeftBarOptions icon={verifyIcon} altText='Ícone de verificado' labelText='Verificados'/>
                <LeftBarOptions icon={profileIcon} altText='Ícone de perfi' labelText='Perfil'/>
                <LeftBarOptions icon={dotsIcon} altText='Ícone de opções' labelText='Mais'/>
                <div>
                    <FlashyButton classes='w-full py-3' labelText='Postar'/>
                </div>
            </div>
            <ProfileButton image={profileImage} name='akemi.tsx' username='@akemidev'/>
        </div>
    );
}

export default LeftBar
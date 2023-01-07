import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={false} />
      <main id='index-container' className='h-screen bg-slate-50 flex relative flex-col overflow-y-scroll'>
        <div className='h-screen flex flex-row'>
          <div className='flex flex-col  justify-center h-screen p-12 lg:w-1/2'>
            <h1 className='text-4xl'>Bienvenue sur le site de l'association de photographes de l'École Centrale de Marseille</h1>
            <p className='text-xl'>Vous trouverez ici toutes les photos de votre passage à l'école</p>
            <p className='text-xl'>Vous pouvez également nous contacter pour toute prestation photographique</p>
          </div>

          <div className='flex flex-col justify-center h-screen p-12 absolute lg:relative lg:w-1/2'>
            <img src='https://via.placeholder.com/300x400/FF0000?text=A' alt='photo' className='absolute top-[15%] left-[0%] w-[40%] h-[50%] object-contain' />
            <img src='https://via.placeholder.com/300x400/FF8888?text=C' alt='photo' className='absolute top-[30%] left-[45%] w-[50%] object-contain' />
            <img src='https://via.placeholder.com/400x300/FFCCCC?text=D' alt='photo' className='absolute top-[40%] left-[15%] w-[50%] h-[50%] object-contain' />
          </div>
        </div>

        <div className='h-screen bg-slate-300 flex flex-shrink-0 flex-col items-center py-4 px-12'>
          <h2 className='text-2xl'>Derniers ajouts</h2>
          <p> Découvrez ou redécouvrez les derniers événements de Centrale à travers des photos </p>
        </div>

        <div className='h-screen flex flex-col flex-shrink-0 items-center py-4 px-12'>
          <h2 className='text-2xl'>Autres photos</h2>
          <p> Découvrez les photos qu'à pu prendre la Team. </p>

        </div>

        <div className='h-screen flex flex-col flex-shrink-0 bg-slate-300 items-center text-2xl text-center justify-center px-12'>
          Nous sommes un groupe de photographes passionnés toujours prêt à déclencher
        </div>
      </main >
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PxC Marseille - Accueil</title>;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={false} />

      <main id='index-container' className='flex relative flex-col'>
        <div className='flex flex-col '>
          <div className='flex flex-col  justify-center h-screen p-12 lg:w-1/2'>
            <h1 className='text-4xl'>Bienvenue sur le site de l'association de photographes de l'École Centrale de Marseille</h1>
            <p className='text-xl'>Vous trouverez ici toutes les photos de votre passage à l'école</p>
            <p className='text-xl'>Vous pouvez également nous contacter pour toute prestation photographique</p>
          </div>

          {/* <div className='flex flex-col justify-center h-screen p-12 absolute lg:relative lg:w-1/2'> */}
          {/* <img src='https://source.unsplash.com/featured/400x300' alt='photo' className='relative' /> */}
          {/* <img src='https://source.unsplash.com/featured/400x301' alt='photo' className='relative' /> */}
          {/* <img src='https://source.unsplash.com/featured/401x300' alt='photo' className='relative' /> */}
          {/* <img src='https://source.unsplash.com/featured/300x400' alt='photo' className='relative' /> */}
          {/* <img src='https://source.unsplash.com/featured/300x401' alt='photo' className='relative' /> */}
          {/* <img src='https://source.unsplash.com/featured/301x400' alt='photo' className='relative' /> */}
          {/* </div> */}
        </div>


        <div className='h-screen bg-slate-300 flex flex-col items-center py-4 px-12'>
          <h2 className='text-2xl'>Derniers ajouts</h2>
          <p> Découvrez ou redécouvrez les derniers événements de Centrale à travers des photos </p>
        </div>

        <div className='h-screen flex flex-col items-center py-4 px-12'>
          <h2 className='text-2xl'>Autres photos</h2>
          <p> Découvrez les photos qu'à pu prendre la Team. </p>

        </div>

        <div className='h-screen flex flex-col bg-slate-300 items-center text-2xl text-center justify-center px-12'>
          Nous sommes un groupe de photographes passionnés toujours prêt à déclencher
        </div>
      </main >
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PxC Marseille - Accueil</title>;

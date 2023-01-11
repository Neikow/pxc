import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { Navigation } from '../components/navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={false} />
      <main
        id='index-container'
        className='relative flex h-screen flex-col overflow-y-scroll bg-slate-50'
      >
        <div className='flex h-screen flex-row'>
          <div className='flex h-screen  flex-col justify-center p-12 lg:w-1/2'>
            <h1 className='text-4xl'>
              Bienvenue sur le site de l'association de photographes de l'École
              Centrale de Marseille
            </h1>
            <p className='text-xl'>
              Vous trouverez ici toutes les photos de votre passage à l'école
            </p>
            <p className='text-xl'>
              Vous pouvez également nous contacter pour toute prestation
              photographique
            </p>
          </div>

          <div className='absolute flex h-screen flex-col justify-center p-12 lg:relative lg:w-1/2'>
            <img
              src='https://via.placeholder.com/300x400/FF0000?text=A'
              alt='photo'
              className='absolute top-[15%] left-[0%] h-[50%] w-[40%] object-contain'
            />
            <img
              src='https://via.placeholder.com/300x400/FF8888?text=C'
              alt='photo'
              className='absolute top-[30%] left-[45%] w-[50%] object-contain'
            />
            <img
              src='https://via.placeholder.com/400x300/FFCCCC?text=D'
              alt='photo'
              className='absolute top-[40%] left-[15%] h-[50%] w-[50%] object-contain'
            />
          </div>
        </div>

        <div className='flex h-screen flex-shrink-0 flex-col items-center bg-slate-300 py-4 px-12'>
          <h2 className='text-2xl'>Derniers ajouts</h2>
          <p className='pb-4'>
            {' '}
            Découvrez ou redécouvrez les derniers événements de Centrale à
            travers des photos{' '}
          </p>
          <div className='grid h-full w-full grid-cols-2'>
            <div className='h-full w-full bg-red-200'></div>
            <div className='h-full w-full bg-blue-200'></div>
            <div className='h-full w-full bg-green-200'></div>
            <div className='h-full w-full bg-yellow-200'></div>
          </div>
          <Link
            to='/albums?type=event&sort=recent'
            className='pt-4'
          >
            Voir davantage &gt;
          </Link>
        </div>

        <div className='flex h-screen flex-shrink-0 flex-col items-center py-4 px-12'>
          <h2 className='text-2xl'>Autres photos</h2>
          <p> Découvrez les photos qu'à pu prendre la Team. </p>
        </div>

        <div className='flex h-screen flex-shrink-0 flex-col items-center justify-center bg-slate-300 px-12 text-center text-2xl'>
          Nous sommes un groupe de photographes passionnés toujours prêt à
          déclencher
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>PxC Marseille - Accueil</title>;

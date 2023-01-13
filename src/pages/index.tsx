import * as React from 'react';
import { HeadFC, Link, PageProps, useScrollRestoration } from 'gatsby';
import { Navigation } from '../components/navigation';
import Albums from '../data/albums';
import { AlbumCard } from '../components/components';

const IndexPage: React.FC<PageProps> = () => {
  const scrollRestoration = useScrollRestoration(`index-page-main`);

  React.useEffect(() => {
    const mainContainer = document.getElementById('index-container');

    if (!mainContainer) return;

    const clickHandler = () => {
      mainContainer.scrollTo({ top: 0 });
    };

    const buttonElement = document.getElementById('home-button');

    if (buttonElement) buttonElement.addEventListener('click', clickHandler);

    return () => {
      // Cleanup

      if (buttonElement)
        buttonElement.removeEventListener('click', clickHandler);
    };
  });

  return (
    <>
      <Navigation showDownloadButton={false} />
      {/** @ts-ignore */}
      <main
        id='index-container'
        className='relative flex h-screen flex-col overflow-y-scroll bg-slate-50 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full'
        {...scrollRestoration}
      >
        <div className='flex h-screen flex-row'>
          <div className='flex h-screen flex-col justify-center p-12 lg:w-1/2'>
            <h1 className='text-4xl'>
              Bienvenue sur le site de l'association de photographes de l'École
              Centrale de Marseille
            </h1>
            <p className='pt-2 text-xl'>
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

        <div className='flex h-auto flex-shrink-0 flex-col items-center bg-slate-300 py-4 px-12'>
          <h2 className='pt-2 text-3xl'>Derniers ajouts</h2>
          <p className='pb-4'>
            {' '}
            Découvrez ou redécouvrez les derniers événements de Centrale à
            travers des photos{' '}
          </p>
          <div className='grid h-full w-full grid-cols-1 lg:grid-cols-2'>
            {Albums.sort((a, b) => {
              return Date.parse(a.date) > Date.parse(b.date) ? -1 : 1;
            })
              .slice(0, 4)
              .map((album) => (
                <AlbumCard
                  key={album.id}
                  count={album.count}
                  title={album.title}
                  year={album.year}
                  id={album.id}
                  className='p-4 lg:p-8'
                />
              ))}
          </div>
          <Link
            to='/albums?type=event&sort=recent'
            className='flex pt-4'
          >
            Voir plus &gt;
          </Link>
        </div>

        <div className='flex h-screen flex-shrink-0 flex-col items-center py-4 px-12'>
          <h2 className='text-3xl'>Autres photos</h2>
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

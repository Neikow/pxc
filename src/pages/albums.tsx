import * as React from "react";
import { HeadFC, PageProps, navigate } from "gatsby";
import { Navigation } from '../components/navigation';
import { AlbumCard } from '../components/components';

type Album = { title: string, date: string, year: string; visits: number; count: number, id: string; };

const Albums: Album[] = [
  {
    id: '2021-2022',
    title: '2021-2022',
    year: '2021-2022',
    date: '2021-08-01',
    visits: 100,
    count: 200,
  },
  {
    id: '2020-2021',
    title: '2020-2021',
    year: '2020-2021',
    date: '2020-08-01',
    visits: 200,
    count: 100,
  },
  {
    id: 'rcm-2021',
    title: 'RCM',
    year: '2020-2021',
    date: '2021-03-01',
    visits: 200,
    count: 150,
  }
];

const UserPage: React.FC<PageProps> = () => {
  const defaultAlbumSort = 'recent';
  const defaultAlbumType = 'year';

  const [ albumSort, setAlbumSort ] = React.useState( defaultAlbumSort );
  const [ albumType, setAlbumType ] = React.useState( defaultAlbumType );

  React.useEffect( () => {
    const urlParams = new URLSearchParams( window.location.search );
    const sort = urlParams.get( 'sort' );
    const type = urlParams.get( 'type' );

    if ( !sort && !type ) {
      return;
    }

    if ( sort ) {
      if ( sort !== 'recent' && sort !== 'popular' ) {
        setAlbumSort( defaultAlbumSort );
      } else {
        setAlbumSort( sort );
      }
    }
    if ( type ) {
      if ( type !== 'year' && type !== 'event' ) {
        setAlbumType( defaultAlbumType );
      } else {
        setAlbumType( type );
      }
    }

    navigate( '/albums', { replace: true } );
  } );

  function sorter ( a: Album, b: Album ): number {
    if ( albumSort === 'recent' ) {
      return Date.parse( a.date ) > Date.parse( b.date ) ? -1 : 1;
    } else if ( albumSort === 'popular' ) {
      return a.visits > b.visits ? -1 : 1;
    } else {
      return 0;
    }
  }

  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='h-screen w-full flex items-center flex-col bg-slate-50 lg:pt-20 pt-16'>
        <div className='w-full items-center shadow-lg flex flex-col'>
          <h2 className='text-3xl pb-2'>
            Albums {'[' + Albums.length + ']'}
          </h2>
          <div className='w-full items-center flex flex-col'>
            <div className='w-full flex flex-row'>
              <button type='button' onClick={() => { setAlbumType( 'year' ); }} className={'w-1/2 py-2 px-4' + ( albumType === 'year' ? ' text-blue-600' : '' )}>
                <h2 className='text-xl text-end'>Par année</h2>
              </button>
              <button type='button' onClick={() => { setAlbumType( 'event' ); }} className={'w-1/2 py-2 px-4' + ( albumType === 'event' ? ' text-blue-600' : '' )}>
                <h2 className='text-xl text-start'>Par événement</h2>
              </button>
            </div>
            <div className='w-full flex flex-row pb-2'>
              <button type='button' onClick={() => { setAlbumSort( 'recent' ); }} className={'w-1/2 py-2 px-4' + ( albumSort === 'recent' ? ' text-blue-600' : '' )}>
                <h2 className='text-lg text-end'>Récents</h2>
              </button>
              <button type='button' onClick={() => { setAlbumSort( 'popular' ); }} className={'w-1/2 py-2 px-4' + ( albumSort === 'popular' ? ' text-blue-600' : '' )}>
                <h2 className='text-lg text-start'>Populaires</h2>
              </button>
            </div>
          </div>
        </div>

        <div className='h-full w-full mb-16 lg:mb-0 flex items-center flex-col overflow-y-auto'>
          {
            Albums.sort( sorter ).map( ( album ) => (
              <AlbumCard
                key={album.id}
                count={album.count}
                title={album.title}
                year={album.year}
                id={album.id}
              />
            ) )
          }
        </div>
      </main >
    </>
  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Albums</title>;

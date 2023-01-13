import * as React from 'react';
import { HeadFC, PageProps, navigate } from 'gatsby';
import { Navigation } from '../components/navigation';
import { AlbumCard } from '../components/components';
import Albums, { Album } from '../data/albums';

const UserPage: React.FC<PageProps> = () => {
  const defaultAlbumSort = 'recent';
  const defaultAlbumType = 'year';

  const [albumSort, setAlbumSort] = React.useState(defaultAlbumSort);
  const [albumType, setAlbumType] = React.useState(defaultAlbumType);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sort = urlParams.get('sort');
    const type = urlParams.get('type');

    if (!sort && !type) {
      return;
    }

    if (sort) {
      if (sort !== 'recent' && sort !== 'popular') {
        setAlbumSort(defaultAlbumSort);
      } else {
        setAlbumSort(sort);
      }
    }
    if (type) {
      if (type !== 'year' && type !== 'event') {
        setAlbumType(defaultAlbumType);
      } else {
        setAlbumType(type);
      }
    }

    navigate('/albums', { replace: true });
  });

  function sorter(a: Album, b: Album): number {
    if (albumSort === 'recent') {
      return Date.parse(a.date) > Date.parse(b.date) ? -1 : 1;
    } else if (albumSort === 'popular') {
      return a.visits > b.visits ? -1 : 1;
    } else {
      return 0;
    }
  }

  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className='flex h-screen w-full flex-col items-center bg-slate-50 pt-16 lg:pt-20'>
        <div className='flex w-full flex-col items-center rounded-b-xl shadow-lg'>
          <h2 className='pb-2 text-2xl md:text-3xl'>
            Albums {'[' + Albums.length + ']'}
          </h2>
          <div className='flex w-full flex-col items-center'>
            <div className='flex w-full flex-row'>
              <button
                type='button'
                onClick={() => {
                  setAlbumType('year');
                }}
                className={
                  'w-1/2 py-1 px-4 md:py-2' +
                  (albumType === 'year' ? ' text-blue-600' : '')
                }
              >
                <h2 className='text-end text-base md:text-xl'>Par année</h2>
              </button>
              <button
                type='button'
                onClick={() => {
                  setAlbumType('event');
                }}
                className={
                  'w-1/2 py-1 px-4 md:py-2' +
                  (albumType === 'event' ? ' text-blue-600' : '')
                }
              >
                <h2 className='text-start text-base md:text-xl'>
                  Par événement
                </h2>
              </button>
            </div>
            <div className='flex w-full flex-row pb-2'>
              <button
                type='button'
                onClick={() => {
                  setAlbumSort('recent');
                }}
                className={
                  'w-1/2 py-1 px-4 md:py-2' +
                  (albumSort === 'recent' ? ' text-blue-600' : '')
                }
              >
                <h2 className='text-end text-sm md:text-xl'>Récents</h2>
              </button>
              <button
                type='button'
                onClick={() => {
                  setAlbumSort('popular');
                }}
                className={
                  'w-1/2 py-1 px-4 md:py-2' +
                  (albumSort === 'popular' ? ' text-blue-600' : '')
                }
              >
                <h2 className='text-start text-sm md:text-xl'>Populaires</h2>
              </button>
            </div>
          </div>
        </div>

        <div className='mb-16 flex h-full w-full flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full lg:mb-0'>
          {Albums.sort(sorter).map((album) => (
            <AlbumCard
              key={album.id}
              count={album.count}
              title={album.title}
              year={album.year}
              id={album.id}
              className='h-1/3 p-4 md:w-5/6 lg:w-4/6 xl:w-3/6'
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Albums</title>;

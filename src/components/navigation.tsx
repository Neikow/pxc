import { Link } from 'gatsby';
import * as React from 'react';

const navigation: { name: string; link: string }[] = [
  {
    name: 'Albums',
    link: '/albums',
  },
  {
    name: 'La Team',
    link: '/team',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'Mes photos',
    link: '/user',
  },
];

export const Navigation: React.FC<{ showDownloadButton: boolean }> = (p) => {
  const [currentPath, setCurrentPath] = React.useState('');

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav
      id='top-bar'
      className='fixed bottom-0 z-50 h-16 w-full rounded-t-2xl bg-white shadow-xl lg:top-0 lg:flex lg:rounded-t-none lg:rounded-b-2xl lg:shadow-lg'
    >
      <div
        id='logo-container'
        className='fixed top-0 px-6 py-3 text-4xl text-gray-800 lg:relative lg:flex'
      >
        <Link to='/'>
          <h1>PxC</h1>
        </Link>
      </div>
      <nav
        id='site-nav'
        className='h-full w-full'
      >
        <ul className='flex h-full justify-between align-middle text-white lg:justify-end'>
          {navigation.map((e) => (
            <li
              key={e.name}
              className='flex justify-center align-middle'
            >
              <Link
                onClick={() => {
                  setCurrentPath(e.link);
                }}
                to={e.link}
                className={
                  'flex justify-center align-middle text-lg transition-colors hover:text-blue-700' +
                  (currentPath.startsWith(e.link)
                    ? ' text-blue-600'
                    : ' text-gray-800')
                }
              >
                <div className='flex items-center px-2 text-sm md:px-8 md:text-base lg:text-lg'>
                  {e.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div id='dl-container'>
        {p.showDownloadButton ? (
          <button
            onClick={() => {}}
            className='fixed bottom-16 right-0 m-4 rounded-full bg-gray-900 p-6 text-xl text-white transition-colors hover:bg-blue-700 lg:bottom-0'
          >
            <svg
              className='h-8 w-8 translate-y-0.5 transition-colors'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 00-1 1v6.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 10.586V4a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

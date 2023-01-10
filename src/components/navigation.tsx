import { Link } from 'gatsby';
import * as React from "react";

const navigation: { name: string, link: string; }[] = [
  {
    name: 'Albums',
    link: '/albums'
  },
  {
    name: 'La Team',
    link: '/team'
  },
  {
    name: 'Contact',
    link: '/contact'
  },
  {
    name: 'Mes photos',
    link: '/user'
  }
];

export const Navigation: React.FC<{ showDownloadButton: boolean; }> = ( p ) => {
  const [ currentPath, setCurrentPath ] = React.useState( '' );

  React.useEffect( () => {
    setCurrentPath( window.location.pathname );
  }, [] );

  if ( !currentPath ) {
    return null;
  }

  if ( typeof window === 'undefined' ) {
    return <></>;
  }

  return (
    <nav id='top-bar' className='w-full z-50 h-16 bg-white fixed bottom-0 lg:top-0 shadow-xl lg:shadow-lg lg:flex rounded-t-2xl lg:rounded-t-none lg:rounded-b-2xl'>
      <div id='logo-container' className='fixed lg:relative lg:flex text-4xl text-gray-800 top-0 px-6 py-3'>
        <Link to='/'>
          <h1>PxC</h1>
        </Link>
      </div>
      <nav id='site-nav' className='w-full h-full'>
        <ul className='text-white h-full flex lg:justify-end justify-between align-middle'>
          {navigation.map( ( e ) => (
            <li key={e.name} className='flex align-middle justify-center'>
              <Link onClick={() => { setCurrentPath( e.link ); }} to={e.link} className={'flex align-middle justify-center text-lg hover:text-blue-700 transition-colors' + ( currentPath.startsWith( e.link ) ? ' text-blue-600' : ' text-gray-800' )}>
                <div className='text-xs md:text-sm lg:text-base flex px-8 items-center'>{e.name}</div>
              </Link>
            </li>
          ) )}
        </ul>
      </nav>
      <div id='dl-container'>
        {p.showDownloadButton ?
          <button onClick={() => { }} className='fixed bottom-16 lg:bottom-0 right-0 m-4 p-6 bg-gray-900 text-white hover:bg-blue-700 text-xl transition-colors rounded-full'>
            <svg className='h-8 w-8 transition-colors translate-y-0.5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M10 3a1 1 0 00-1 1v6.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 10.586V4a1 1 0 00-1-1z' clipRule='evenodd' />
            </svg>
          </button> : <></>
        }
      </div>
    </nav>
  );
};
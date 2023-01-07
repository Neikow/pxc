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
    return () => { };
  } );

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
                <div className='flex px-8 items-center'>{e.name}</div>
              </Link>
            </li>
          ) )}
        </ul>
      </nav>
      <div id='dl-container'>
        {p.showDownloadButton ?
          <button onClick={() => { }} className='fixed bottom-16 lg:bottom-0 right-0 m-4 p-6 bg-gray-900 text-white text-xl rounded-full'>
            DL
          </button> : <></>
        }
      </div>
    </nav>
  );
};
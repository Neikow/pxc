import * as React from 'react';
import { Button, Card } from './components';

// TODO: Add a "no photo" state to the dashboard
// TODO: Add a "loading" state to the dashboard
// TODO: Add a "photo uploaded" state to the dashboard

/**
 * The user dashboard
 */
export const Dashboard: React.FC<{ isUserAdmin: boolean; username: string }> = (
  p
) => {
  const [userHasPhoto, setUserHasPhoto] = React.useState(false);
  const [isUsingAdmin, setIsUsingAdmin] = React.useState(p.isUserAdmin);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    console.log('isMenuOpen: ', isMenuOpen);
    const dropdownOutside = document.getElementById('dropdown-outside');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (!dropdownMenu || !dropdownOutside) {
      return;
    }

    if (isMenuOpen) {
      dropdownMenu.style.display = 'block';
      dropdownOutside.style.display = 'block';
      window.setTimeout(() => {
        dropdownMenu.style.opacity = '1';
      }, 10);
    } else {
      dropdownOutside.style.display = 'none';
      dropdownMenu.style.opacity = '0';
      window.setTimeout(() => {
        dropdownMenu.style.display = 'none';
      }, 150);
    }
  }, [isMenuOpen]);

  return (
    <div className='h-full w-full'>
      <div
        id='dashboard-container'
        className='m-2 pt-12 pb-16 lg:pt-[6.5rem]'
      >
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          id='dashboard-menu'
          className='fixed top-0 right-0 flex justify-between p-4 text-lg text-gray-800 lg:top-16'
        >
          <div className='mr-2 h-6 w-6 fill-gray-600'>
            <svg
              clipRule='evenodd'
              fillRule='evenodd'
              strokeLinejoin='round'
              strokeMiterlimit='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z' />
            </svg>
          </div>
          Hello, {p.username} !
        </button>

        <div
          onClick={(e) => {
            setIsMenuOpen(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          id='dropdown-outside'
          className='fixed top-0 z-20 h-screen w-screen bg-slate-300 opacity-0'
        ></div>

        <div
          id='dropdown-menu'
          className={
            'fixed right-4 z-30 rounded-xl bg-white p-4 pl-12 shadow-md transition-opacity'
          }
        >
          <div className='flex flex-col space-y-4'>
            <button className='text-end'>Contacter un administrateur</button>
            <button className='text-end text-red-700'>Se déconnecter</button>
          </div>
        </div>

        {userHasPhoto ? (
          <></>
        ) : (
          <Card
            id='dashboard-upload-single'
            className='border-2 border-blue-400'
          >
            <h2 className='pb-2 text-2xl'>Reconnaissance automatique</h2>
            <div>
              Dépose une photo de toi pour pouvoir facilement retrouver les
              autres photos sur lequelles tu apparais !
            </div>

            <input
              className='py-4'
              type='file'
              name='image'
              accept='image/png, image/jpeg'
              multiple
            />

            <div>
              Choisis un ou plusieurs fichiers sur ton ordinateur, ou glisse les
              simplement sur cette page.
            </div>

            <div>
              En envoyant la photo, tu acceptes les <a>Conditions générales</a>{' '}
              du PxC sur l'utilisation de ton image dans le cadre de la
              reconnaissance faciale dans la base de données des images de
              l'association. Les données associées à cette photo ne quitterons
              en aucun cas les serveurs de l'école.
            </div>

            <div className='flex justify-end'>
              <Button type='submit'>Déposer</Button>
            </div>
          </Card>
        )}

        {p.isUserAdmin && (
          <Card id='dashboard-admin-upload-photos'>
            <div className='flex justify-between pb-2'>
              <h2 className='text-2xl'>Dépôt de photos</h2>
              <button className='h-8 w-8 text-center text-3xl'>×</button>
            </div>
            <div>
              Tu peux déposer tes photos en cliquant sur le bouton ci-dessous ou
              en les glissant sur cette page. Tu peux déposer plusieurs photos
              en même temps.
            </div>

            <input
              className='py-4'
              type='file'
              name='image'
              accept='image/png, image/jpeg'
              multiple
            />
          </Card>
        )}
        <Card
          id='dashboard-statistics'
          className='min-w-min rounded-xl bg-white p-4 shadow-lg'
        >
          <h2 className='pb-2 text-2xl'>Statistiques</h2>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
            <div className='flex flex-col items-center rounded-xl bg-slate-100 p-4'>
              <h3 className='pb-2 text-4xl'>436</h3>
              <p className='text-center'>photos sur lesquelles tu apparais</p>
            </div>

            <div className='flex flex-col items-center rounded-xl bg-slate-100 p-4'>
              <h3 className='pb-2 text-4xl'>563</h3>
              <p className='text-center'>
                photos déposées par le PxC ce mois-ci
              </p>
            </div>

            <div className='flex flex-col items-center rounded-xl bg-slate-100 p-4'>
              <h3 className='pb-2 text-4xl'>156</h3>
              <p className='text-center'>visages connus par l'IA</p>
            </div>

            {p.isUserAdmin && (
              <div className='flex flex-col items-center rounded-xl bg-slate-100 p-4'>
                <h3 className='pb-2 text-4xl'>12</h3>
                <p className='text-center'>photos déposées par toi</p>
              </div>
            )}
          </div>
        </Card>

        <Card>
          <h2 className='pb-2 text-2xl'>Mes photos</h2>
          <div
            id='filter-bar'
            className='flex'
          >
            <div className='pr-4'>
              <span>Année :</span>
              <select
                name='year'
                id='year'
              >
                <option value='all'>Toutes les années</option>
                <option value='2022-2023'>2022-2023</option>
                <option value='2021-2022'>2021-2022</option>
                <option value='2020-2021'>2020-2021</option>
              </select>
            </div>
            <div className='pr-4'>
              <span>Album :</span>
              <select
                name='album'
                id='album'
              >
                <option value='all'>Tous les albums</option>
                <option value='album1'>Album 1</option>
                <option value='album2'>Album 2</option>
              </select>
            </div>
            <div className='pr-4'>
              <span>Sélecteur :</span>
              <select
                name='selector'
                id='selector'
              >
                <option value='all'>Toutes les photos</option>
                <option value='only-me'>Automatiques</option>
                <option value='only-me'>Marquées</option>
              </select>
            </div>
          </div>
          <div
            id='dashboard-photo-grid'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
              <div className='m-2 flex aspect-[4/3] items-center justify-center bg-gray-100 text-center transition-shadow hover:shadow-md'>
                {e}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

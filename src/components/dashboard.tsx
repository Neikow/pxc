import * as React from "react";
import { Button, Card } from './components';


// TODO: Add a "no photo" state to the dashboard
// TODO: Add a "loading" state to the dashboard 
// TODO: Add a "photo uploaded" state to the dashboard

/**
 * The user dashboard
 */
export const Dashboard: React.FC<{ isUserAdmin: boolean; username: string; }> = ( p ) => {
  const [ userHasPhoto, setUserHasPhoto ] = React.useState( false );
  const [ isUsingAdmin, setIsUsingAdmin ] = React.useState( p.isUserAdmin );

  return (
    <div className='h-full w-full'>
      <div id='dashboard-container' className='pt-12 pb-16 m-2 lg:pt-[6.5rem]'>
        <div id='dashboard-welcome' className='text-lg absolute flex justify-between top-0 lg:top-16 p-4 right-0 -z-10'>
          <div id='admin-mode-toggle'>
            {p.isUserAdmin ? <Button>Vue administrateur</Button> : <></>}
            Hello, {p.username} !
          </div>
        </div>

        {userHasPhoto ? <></> :
          <Card id='dashboard-upload-single'>
            <h2 className='text-2xl pb-2'>Reconnaissance automatique</h2>
            <div>
              Dépose une photo de toi pour pouvoir facilement retrouver les autres photos sur lequelles tu apparais !
            </div>

            <input className='py-4' type='file' name='image' accept="image/png, image/jpeg" multiple />

            <div>Choisis un ou plusieurs fichiers sur ton ordinateur, ou glisse les simplement sur cette page.</div>

            <div>En envoyant la photo, vous acceptez les <a>Conditions générales</a> du PxC sur l'utilisation de votre image dans le cadre de la reconnaissance faciale dans la base de données des images de l'association. Les données associées à cette photo ne quitterons en aucun cas les serveurs de l'école.</div>

            <div className='flex justify-end'>
              <Button type='submit'>
                Déposer
              </Button>
            </div>

          </Card>
        }

        {p.isUserAdmin ?
          <Card id='dashboard-admin-upload-photos'>
            <div className='flex justify-between pb-2'>
              <h2 className='text-2xl'>Dépôt de photos</h2>
              <button className='text-3xl w-8 h-8 text-center'>
                ×
              </button>
            </div>
            <div>
              Vous pouvez déposer vos photos en cliquant sur le bouton ci-dessous ou en les glissant sur cette page. Vous pouvez déposer plusieurs photos en même temps.
            </div>
          </Card> : <></>}

        <Card id='dashboard-statistics' className='bg-white rounded-xl p-4 shadow-lg min-w-min'>
          <h2 className='text-2xl pb-2'>Statistiques</h2>
          <div>
            Tu apparais sur 435 photos.
          </div>
          <div>
            Ce mois-ci, 563 nouvelles photos ont été déposées par le PxC.
          </div>
        </Card>



        <Card>
          <h2 className='text-2xl pb-2'>Mes photos</h2>
          <div id='filter-bar'>
            <select name='year' id='year'>
              <option value='all'>Toutes les années</option>
              <option value='2022-2023'>2022-2023</option>
              <option value='2021-2022'>2021-2022</option>
              <option value='2020-2021'>2020-2021</option>
            </select>
            <select name='album' id='album'>
              <option value='all'>Tous les albums</option>
              <option value='album1'>Album 1</option>
              <option value='album2'>Album 2</option>
            </select>
          </div>
          <div id='dashboard-photo-grid' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map( ( e ) =>
              <div className='aspect-[4/3] bg-gray-100 m-2 text-center flex justify-center items-center hover:shadow-md transition-shadow'>{e}</div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
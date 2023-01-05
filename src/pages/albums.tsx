import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from '../components/navigation';
import { Dashboard } from '../components/dashboard';
import { Button } from '../components/components';

const UserPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation showDownloadButton={true} />
      <main className=' h-screen w-full flex justify-center items-center'>
        <h2>Par année</h2>
        <h2>Par événement</h2>
      </main >
    </>

  );
};

export default UserPage;

export const Head: HeadFC = () => <title>PxC Marseille - Mes photos</title>;

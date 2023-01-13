export type Album = {
  title: string;
  date: string;
  year: string;
  visits: number;
  count: number;
  id: string;
};

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
  },
  {
    id: 'rcm-2022',
    title: 'RCM',
    year: '2021-2022',
    date: '2022-03-08',
    visits: 250,
    count: 200,
  },
];

export default Albums;

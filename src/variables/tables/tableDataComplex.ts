type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'GIC Data 1',
    progress: 75.5,
    status: 'Approved',
    date: '12 Jan 2021',
  },
  {
    name: 'GIC Data 2',
    progress: 25.5,
    status: 'Disable',
    date: '21 Feb 2021',
  },
  {
    name: 'GIC Data 3',
    progress: 90,
    status: 'Error',
    date: '13 Mar 2021',
  },
  {
    name: 'GIC Data 4',
    progress: 50.5,
    status: 'Approved',
    date: '24 Oct 2022',
  },
];
export default tableDataComplex;

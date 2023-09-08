type RowObj = {
  name: string;
  progress: string;
  quantity: number;
  date: string;
};

const tableDataColumns: RowObj[] = [
  {
    name: 'GIC Data 1',
    quantity: 2458,
    progress: '17.5%',
    date: '12 Jan 2023',
  },
  {
    name: 'GIC Data 2',
    quantity: 1485,
    progress: '10.8%',
    date: '21 Feb 2023',
  },
  {
    name: 'GIC Data 3',
    quantity: 1024,
    progress: '21.3%',
    date: '13 Mar 2023',
  },
  {
    name: 'GIC Data 4',
    quantity: 858,
    progress: '31.5%',
    date: '24 Jan 2023',
  },
];

export default tableDataColumns;

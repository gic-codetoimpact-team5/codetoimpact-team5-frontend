import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
} from 'react-icons/md';

import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  // --- Pages ---
  {
    name: 'Pages',
    path: '/main',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Analytics',
        layout: '/pages',
        path: '/main/analytics',
      },
      {
        name: 'Market',
        layout: '/pages',
        path: '/main/market',
      },
      {
        name: 'Ingestor',
        layout: '/pages',
        path: '/main/ingestor',
      },
      {
        name: 'Positions',
        layout: '/pages',
        path: '/main/positions',
      },
      {
        name: 'Tables',
        layout: '/pages',
        path: '/main/tables',
      },
      {
        name: 'GenAI',
        layout: '/pages',
        path: '/main/genai',
      },
    ],
  },
];

export default routes;

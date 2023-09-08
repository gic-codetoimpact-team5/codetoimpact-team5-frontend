'use client';

import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Balance from 'components/main/analytics/Balance';
import DailyTraffic from 'components/main/analytics/DailyTraffic';
import MostVisitedTable from 'components/main/analytics/MostVisitedTable';
import OverallRevenue from 'components/main/analytics/OverallRevenue';
import ProjectStatus from 'components/main/analytics/ProjectStatus';
import YourCard from 'components/main/analytics/YourCard';
import { VSeparator } from 'components/separator/Separator';
import YourTransfers from 'components/main/analytics/YourTransfers';
import tableDataMostVisited from 'variables/analytics/tableDataMostVisited';
import ProfitEstimation from 'components/main/analytics/ProfitEstimation';
import React from 'react';

export default function Page() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Flex direction="column" width="stretch">
        <Grid
          mb="20px"
          gridTemplateColumns={{ base: 'repeat(2, 1fr)', '2xl': '720fr 350fr' }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
            <OverallRevenue />
          </Flex>
          <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <Balance />
          </Flex>
        </Grid>
        <Grid
          gap="20px"
          gridTemplateColumns={{
            md: 'repeat(2, 1fr)',
            '2xl': 'repeat(3, 1fr)',
          }}
          gridTemplateRows={{
            md: 'repeat(2, 1fr)',
            '2xl': '1fr',
          }}
          mb="20px"
        >
          <Flex gridArea={{ md: '1 / 1 / 2 / 2', '2xl': '1 / 1 / 2 / 2' }}>
            <DailyTraffic />
          </Flex>
          <Flex gridArea={{ md: '1 / 2 / 2 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <ProjectStatus />
          </Flex>
          <Flex gridArea={{ md: ' 2 / 1 / 3 / 3', '2xl': '1 / 3 / 2 / 4' }}>
            <ProfitEstimation />
          </Flex>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', '2xl': '350fr 720fr' }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
            <YourTransfers />
          </Flex>
          <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <MostVisitedTable tableData={tableDataMostVisited} />
          </Flex>
        </Grid>
      </Flex>
      <VSeparator
        mx="20px"
        bg={paleGray}
        display={{ base: 'none', xl: 'flex' }}
      />
      <YourCard
        maxW={{ base: '100%', xl: '400px' }}
        maxH={{ base: '100%', xl: '1170px', '2xl': '100%' }}
      />
    </Flex>
  );
}
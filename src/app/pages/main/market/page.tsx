'use client'

import { Flex, SimpleGrid } from '@chakra-ui/react';

import YourTransactions from 'components/main/market/YourTransactions';
import YourTransfers from 'components/main/market/YourTransfers';
import Market from 'components/main/market/Market';
export default function Billing() {

  return (
    <Flex pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex direction="column" width="stretch">
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 1, xl: 3 }}
          gap="20px"
          mb="20px"
        >
          <Flex>
            <YourTransactions />
          </Flex>
          <Flex>
            <Market />
          </Flex>
          <Flex>
            <YourTransfers />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

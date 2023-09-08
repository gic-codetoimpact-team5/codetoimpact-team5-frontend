'use client'

import {
  Box,
  Grid,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import Card from 'components/card/Card';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';

import {
  MdAttachMoney,
  MdCreditCard,
  MdPerson,
  MdRedo,
  MdShowChart,
} from 'react-icons/md';
import ReferralsTable from 'components/main/positions/ReferralsTable';
import tableDataReferrals from 'variables/positions/tableDataReferrals';
import SearchTableOrders from 'components/main/positions/SearchTableOrders';
import tableDataOrders from 'variables/positions/tableDataOrders';

export default function Referrals() {
  // Chakra Color Mode
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 5 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdAttachMoney}
                  color={brandColor}
                />
              }
            />
          }
          name="Your Earnings"
          value="$127,589"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdShowChart} color={brandColor} />
              }
            />
          }
          name="Your Profit"
          value="$67,325"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdPerson} color={brandColor} />
              }
            />
          }
          name="Customers"
          value="1,849"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdCreditCard}
                  color={brandColor}
                />
              }
            />
          }
          name="Average Value"
          value="$69.00"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdRedo} color={brandColor} />}
            />
          }
          name="Refund Rate"
          value="5,70%"
        />
      </SimpleGrid>
      <SearchTableOrders tableData={tableDataOrders} />
      <Card>
        <ReferralsTable tableData={tableDataReferrals} />
      </Card>
    </Box>
  );
}

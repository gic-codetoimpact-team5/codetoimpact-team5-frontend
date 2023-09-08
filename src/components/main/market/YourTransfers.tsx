'use client'
import { Button, Text, useColorModeValue } from '@chakra-ui/react';

import Card from 'components/card/Card';
import Transfer from 'components/dataDisplay/Transfer';

export default function YourTransfers(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Card
      flexDirection="column"
      w="100%"
      p="34px"
      pb="20px !important"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="xl"
        fontWeight="700"
        lineHeight="100%"
        mb="26px"
      >
        Your Transfers
      </Text>
      <Transfer
        mb="26px"
        name="From Alex Manda"
        date="Today, 16:36"
        sum="+$50"
      />
      <Transfer
        mb="26px"
        name="To Laura Santos"
        date="Today, 08:49"
        sum="-$27"
      />
      <Transfer
        mb="26px"
        name="From Jadon S."
        date="Yesterday, 14:36"
        sum="+$157"
      />
      <Transfer
        mb="26px"
        name="From Esthera J."
        date="Yesterday, 09:42"
        sum="+$92"
      />
      <Transfer
        mb="26px"
        name="From Esthera J."
        date="Yesterday, 09:42"
        sum="+$92"
      />
      <Transfer
        mb="26px"
        name="From Alonso M."
        date="Tuesday, 20:37"
        sum="-$32"
      />
      <Transfer
        mb="26px"
        name="From Mark A."
        date="Tuesday, 09:53"
        sum="+$87"
      />

      <Button
        p="0px"
        ms="auto"
        variant="no-hover"
        bg="transparent"
        my={{ sm: '1.5rem', lg: '0px' }}
      >
        <Text
          fontSize="md"
          color={brandColor}
          fontWeight="bold"
          cursor="pointer"
          my={{ sm: '1.5rem', lg: '0px' }}
        >
          See all transfers
        </Text>
      </Button>
    </Card>
  );
}

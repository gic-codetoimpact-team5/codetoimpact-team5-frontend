'use client'
import { Flex, Text, useColorModeValue, Badge } from '@chakra-ui/react';

export default function Transfer(props: {
  date: string;
  sum: string;
  name: string;
  [x: string]: any;
}) {
  const { date, sum, avatar, name, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" {...rest}>
      <Flex direction="column" align="start" me="auto">
        <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
          {name}
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {date}
        </Text>
      </Flex>
      <Badge
        ms="auto"
        colorScheme={sum[0] === '-' ? 'red' : 'green'}
        color={sum[0] === '-' ? 'red.500' : 'green.500'}
        fontSize="sm"
      >
        {sum}
      </Badge>
    </Flex>
  );
}

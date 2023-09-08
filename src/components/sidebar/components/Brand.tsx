import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand(props: { mini: boolean; hovered: boolean }) {
  const { mini, hovered } = props;

  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* Add GIC logo here */}
      <Text
        display={
          mini === false
            ? 'none'
            : mini === true && hovered === true
            ? 'none'
            : 'block'
        }
        fontSize={'30px'}
        fontWeight="800"
        color={logoColor}
      >
        H
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;

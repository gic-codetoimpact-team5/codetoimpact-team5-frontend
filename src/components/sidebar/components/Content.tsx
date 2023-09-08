import {
  Box,
  Flex,
  Stack
} from '@chakra-ui/react';

import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import { IRoute } from 'types/navigation';

function SidebarContent(props: {
  routes: IRoute[];
  hovered?: boolean;
  mini?: boolean;
}) {
  const { routes, mini, hovered } = props;

  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand mini={mini} hovered={hovered} />
      <Stack direction="column" mb="auto" mt="8px">
        <Box
          ps={
            mini === false
              ? '20px'
              : mini === true && hovered === true
              ? '20px'
              : '16px'
          }
          pe={{ md: '16px', '2xl': '1px' }}
          ms={mini && hovered === false ? '-16px' : 'unset'}
        >
          <Links mini={mini} hovered={hovered} routes={routes} />
        </Box>
      </Stack>

      <Box
        ps="20px"
        pe={{ md: '16px', '2xl': '0px' }}
        mt="60px"
        borderRadius="30px"
      >
      </Box>
      <Flex mt="75px" mb="56px" justifyContent="center" alignItems="center">
        <Box
          display={
            mini === false
              ? 'block'
              : mini === true && hovered === true
              ? 'block'
              : 'none'
          }
        >
        </Box>
      </Flex>
    </Flex>
  );
}

export default SidebarContent;

'use client'
/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'components/link/Link';

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  return (
      <Flex
          zIndex="3"
          flexDirection={{
              base: 'column',
              xl: 'row',
          }}
          alignItems={{
              base: 'center',
              xl: 'start',
          }}
          justifyContent="space-between"
          px={{ base: '30px', md: '50px' }}
          pb="30px"
      >
          <Text
              color={textColor}
              textAlign={{
                  base: 'center',
                  xl: 'start',
              }}
              mb={{ base: '20px', xl: '0px' }}
          >
              <Text as="span" fontWeight="500" ms="4px">
                  GIC Frontend - Team 5
              </Text>
          </Text>
          <List display="flex">
              <ListItem
                  me={{
                      base: '20px',
                      md: '44px',
                  }}
              >
                  <Link
                      fontWeight="500"
                      color={textColor}
                      href="mailto:hello@simmmple.com"
                  >
                      Ingestor
                  </Link>
              </ListItem>
              <ListItem
                  me={{
                      base: '20px',
                      md: '44px',
                  }}
              >
                  <Link
                      fontWeight="500"
                      color={textColor}
                      href="https://www.simmmple.com/licenses"
                  >
                      Positions
                  </Link>
              </ListItem>
              <ListItem
                  me={{
                      base: '20px',
                      md: '44px',
                  }}
              >
                  <Link
                      fontWeight="500"
                      color={textColor}
                      href="https://simmmple.com/terms-of-service"
                  >
                      Analytics
                  </Link>
              </ListItem>
              <ListItem>
                  <Link
                      fontWeight="500"
                      color={textColor}
                      href="https://www.blog.simmmple.com/"
                  >
                      GenAI
                  </Link>
              </ListItem>
          </List>
      </Flex>
  );
}

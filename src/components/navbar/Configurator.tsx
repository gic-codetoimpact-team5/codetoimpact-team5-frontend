import {
  Button,
  Text,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Center,
  Card,
} from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { ConfiguratorContext } from 'contexts/ConfiguratorContext';

import Messages from 'components/main/genai/Messages';
export default function HeaderLinks() {
  const context = useContext(ConfiguratorContext);
  const { theme, setContrast } = context;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState('Purple');

  const drawerBg = useColorModeValue('white', 'navy.800');

  useEffect(() => {
    if (theme.colors.brand[500] === theme.colors.horizonGreen[500]) {
      setActive('Green');
    } else if (theme.colors.brand[500] === theme.colors.horizonOrange[500]) {
      setActive('Orange');
    } else if (theme.colors.brand[500] === theme.colors.horizonRed[500]) {
      setActive('Red');
    } else if (theme.colors.brand[500] === theme.colors.horizonBlue[500]) {
      setActive('Blue');
    } else if (theme.colors.brand[500] === theme.colors.horizonTeal[500]) {
      setActive('Teal');
    } else {
      setActive('Purple');
    }
  }, [
    theme.colors.brand,
    theme.colors.horizonGreen,
    theme.colors.horizonOrange,
    theme.colors.horizonRed,
    theme.colors.horizonBlue,
    theme.colors.horizonTeal,
  ]);
  const configuratorShadow = useColorModeValue(
    '-20px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '-22px 32px 51px 4px #0B1437',
  );
  useEffect(() => {
    if (theme.colors.background[100] === '#FFFFFF') {
      setContrast(false);
    } else {
      setContrast(true);
    }
  }, [theme.colors.background, setContrast]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);
  
  return (
    <>
      <Button
        variant="no-hover"
        bg="#11047A"
        p="0px"
        h="40px"
        w="max-content"
        _hover={{ cursor: 'pointer' }}
        borderRadius={'50%'}
        onClick={onOpen}
      >
        <Center top={0} left={0} position={'absolute'} w={'100%'} h={'100%'}>
          <Text fontSize={'xs'} fontWeight="bold" color={'white'}>
              Chat
          </Text>
          {/* <Icon me="10px" h="30px" w="30px" color={navbarIcon} as={MdOutlineChatBubbleOutline} /> */}
        </Center>
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === 'rtl' ? 'left' : 'right'}
        blockScrollOnMount={false}
      >
        <DrawerContent
          boxShadow={configuratorShadow}
          w={{ base: 'calc(100vw - 32px)', md: '400px' }}
          maxW={{ base: 'calc(100vw - 32px)', md: '400px' }}
          ms={{
            base: '0px',
            sm: '16px',
          }}
          me={{
            base: '16px',
          }}
          my={{
            sm: '16px',
          }}
          borderRadius="16px"
          bg={drawerBg}
        >
          {/* <Grid
            display={{ base: 'block', md: 'grid' }}
            pt={{ base: '60px', md: '30px', xl: '30px' }}
            minHeight="95vh"
            minWidth="40vh"
          > */}
            <Card
              display={{ base: 'none', md: 'flex' }}
              w="36vh"
              h="95vh"
              gridArea="1 / 2 / 2 / 3"
              px="0px"
            >
              <Messages status="active" name="Kaveri Priya Putti" />
            </Card>
          {/* </Grid> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

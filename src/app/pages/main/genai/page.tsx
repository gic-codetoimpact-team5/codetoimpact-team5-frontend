'use client';

import {
  Grid
} from '@chakra-ui/react';

import Card from 'components/card/Card';
import Messages from 'components/main/genai/Messages';

export default function Default() {
  return (
    <Grid
      display={{ base: 'block', md: 'grid' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      minHeight="95vh"
      minWidth="95vh"
    >
      <Card
        display={{ base: 'none', md: 'flex' }}
        w="100vh"
        gridArea="1 / 2 / 2 / 3"
        px="0px"
      >
        <Messages status="active" name="Kaveri Priya Putti" />
      </Card>
    </Grid>
  );
}

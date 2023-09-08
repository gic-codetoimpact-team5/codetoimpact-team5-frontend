'use client';
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import MessageBlock from 'components/chat/MessageBlock';
import React, { useEffect, useState } from 'react';

import {
  messagesRenderThumb,
  messagesRenderTrack,
  messagesRenderView,
} from 'components/scrollbar/Scrollbar';
import { FaCircle } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';

export default function Messages(props: {
  status: string;
  name: string;
  [x: string]: any;
}) {
  const { status, name, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const inputText = useColorModeValue('gray.700', 'gray.100');
  const blockBg = useColorModeValue('secondaryGray.300', 'navy.700');
  const brandButton = useColorModeValue('brand.500', 'brand.400');
  const bgInput = useColorModeValue(
    'linear-gradient(1.02deg, #FFFFFF 49.52%, rgba(255, 255, 255, 0) 99.07%)',
    'linear-gradient(1.02deg, #111C44 49.52%, rgba(17, 28, 68, 0) 99.07%)',
  );
  const borderColor = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');

  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [botMessages, setBotMessages] = useState<string[]>([]);

  // Function to send a user message to the Anthropic API and receive a response
  const sendMessageToAPI = async (message: string) => {
    try {
      // Make an API request to Anthropic API
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();

        // Add the API response to bot messages
        setBotMessages([...botMessages, data.response]);
      } else {
        console.error('Failed to send message to API');
      }
    } catch (error) {
      console.error('Error sending message to API', error);
    }
  };

  // Function to handle user messages
  const handleUserMessage = () => {
    if (currentMessage.trim() === '') {
      return;
    }

    console.log(currentMessage);

    // Add the user's message to the list of user messages
    setUserMessages([...userMessages, currentMessage]);

    console.log(userMessages);

    // Send the user's message to the Anthropic API
    sendMessageToAPI(currentMessage);

    setCurrentMessage(''); // Clear the input field after sending the message
  };

  useEffect(() => {
    // You can customize this logic to handle bot-initiated messages or other events
  }, [currentMessage, userMessages, botMessages]);

  return (
    <Box h="100%" {...rest}>
      <div>
      {/* Display bot and user messages here */}
      <div>
        {userMessages.map((message, index) => (
          <div key={`user-${index}`}>User: {message}</div>
        ))}
        {botMessages.map((message, index) => (
          <div key={`bot-${index}`}>Bot: {message}</div>
        ))}
      </div>

      {/* Input field for typing messages */}
      <input
        type="text"
        placeholder="Type your message..."
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleUserMessage();
          }
        }}
      />

      {/* Send button */}
      <button onClick={handleUserMessage}>Send</button>
    </div>
      <Flex
        px="34px"
        pb="25px"
        borderBottom="1px solid"
        borderColor={borderColor}
        align="center"
      >
        <Box>
          <Text
            color={textColor}
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight="700"
          >
            Kaveri - Your Financial Advisor
          </Text>
          <Flex align="center">
            <Icon
              w="6px"
              h="6px"
              me="8px"
              as={FaCircle}
              color={
                status === 'active'
                  ? 'green.500'
                  : status === 'away'
                  ? 'orange.500'
                  : 'red.500'
              }
            />
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              {status === 'active'
                ? 'Active'
                : status === 'away'
                ? 'Away'
                : 'Offline'}{' '}
            </Text>
          </Flex>
        </Box>
        <Flex align="center" ms="auto" />
      </Flex>
      <Box
        h="calc(100% - 80px)"
        px={{ base: '10px', md: '20px' }}
        pt="45px"
        position="relative"
      >
        <Scrollbars
          autoHide
          renderTrackVertical={messagesRenderTrack}
          renderThumbVertical={messagesRenderThumb}
          renderView={messagesRenderView}
        >
          <Flex overflow="hidden">
            <Flex
              direction="column"
              w="100%"
              maxW={{ base: '90%', lg: 'calc(100% - 80px)' }}
              boxSizing="border-box"
            >
              <MessageBlock
                content="Hello, I'm here to help you with Anthropic API queries about funds!"
                time="09:00 PM"
                side="left"
              />
            </Flex>
          </Flex>
          <Flex mb="50px" overflow="hidden" w="94%" ms="auto" justify="end">
            <Flex
              direction="column"
              w="calc(90%)"
              maxW={{ base: '90%', lg: 'calc(100% - 80px)' }}
              boxSizing="border-box"
              alignItems="flex-end"
            >
              <MessageBlock
                seen
                content="Hello, Kaveri! I have a question."
                time="09:23 PM"
              />
            </Flex>
          </Flex>
        </Scrollbars>
        <Flex
          bg={bgInput}
          backdropFilter="blur(20px)"
          pt="10px"
          position="absolute"
          w={{ base: 'calc(100% - 20px)', md: 'calc(100% - 40px)' }}
          bottom="0px"
        >
          <InputGroup me="10px" w={{ base: '100%' }}>
            <Input
              variant="search"
              fontSize="md"
              pl={{ base: '40px !important', lg: '65px !important' }}
              pr={{
                base: '0px',
                lg: '145px !important',
              }}
              h={{ base: '50px', lg: '70px' }}
              bg={blockBg}
              color={inputText}
              fontWeight="500"
              _placeholder={{ color: 'gray.400', fontSize: '16px' }}
              borderRadius={'50px'}
              placeholder={'Write your message...'}
            />
          </InputGroup>
          <Button
            borderRadius="50%"
            ms={{ base: '14px', lg: 'auto' }}
            bg={brandButton}
            w={{ base: '30px', lg: '60px' }}
            h={{ base: '30px', lg: '60px' }}
            minW={{ base: '30px', lg: '60px' }}
            minH={{ base: '30px', lg: '60px' }}
            variant="no-hover"
          >
            <Icon
              as={IoPaperPlane}
              color="white"
              w={{ base: '18px', lg: '29px' }}
              h={{ base: '18px', lg: '25px' }}
            />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

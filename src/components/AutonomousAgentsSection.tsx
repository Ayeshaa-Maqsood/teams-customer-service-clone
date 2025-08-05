import { useState } from "react";
import {
  Box,
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

import backgroundImage from "../images/agents-bg-Banner.avif";
import thumbnailImage from "../images/combined-agents_tbmnl.avif";

const AutonomousAgentsSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Add your video play logic here
    console.log("Playing video...");
  };

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
    >
      {/* Background Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(26, 54, 93, 0.3)"
        zIndex="1"
      />

      <Container maxW="7xl" position="relative" zIndex="2">
        <HStack
          spacing={16}
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
        >
          {/* Left Side - Video Thumbnail */}
          <Box flex="1" position="relative">
            <Box
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              cursor="pointer"
              onClick={handlePlayVideo}
              transform="perspective(1000px) rotateY(-5deg)"
              transition="all 0.3s ease"
              _hover={{
                transform: "perspective(1000px) rotateY(-2deg) scale(1.02)",
                boxShadow: "3xl",
              }}
            >
              {/* Laptop Frame */}
              <Box bg="gray.800" p="2" borderRadius="xl" position="relative">
                {/* Screen */}
                <Box
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  position="relative"
                  aspectRatio="16/10"
                  backgroundImage={`url(${thumbnailImage})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                >
                  {/* Video placeholder content */}
                  {/* <VStack
                    spacing={4}
                    p={8}
                    h="full"
                    justify="center"
                    align="flex-start"
                  >
                    <Text fontSize="sm" color="blue.600" fontWeight="semibold">
                      Dynamics 365
                    </Text>
                    <VStack spacing={2} align="flex-start">
                      <Text color="blue.700" fontWeight="bold" fontSize="lg">
                        Case Management Agent
                      </Text>
                      <Text color="blue.700" fontWeight="bold" fontSize="lg">
                        Customer Intent Agent
                      </Text>
                      <Text color="blue.700" fontWeight="bold" fontSize="lg">
                        Customer Knowledge
                      </Text>
                      <Text color="blue.700" fontWeight="bold" fontSize="lg">
                        Management Agent
                      </Text>
                    </VStack>
                  </VStack> */}

                  {/* Mock interface elements on the right */}
                  <Box
                    position="absolute"
                    right="4"
                    top="4"
                    bottom="4"
                    width="60%"
                    bg="white"
                    borderRadius="md"
                    p="4"
                    boxShadow="sm"
                  >
                    {/* Mock interface content */}
                    <VStack spacing={2} align="stretch">
                      <Box h="2" bg="gray.200" borderRadius="sm" />
                      <Box h="2" bg="gray.200" borderRadius="sm" width="80%" />
                      <Box h="2" bg="gray.200" borderRadius="sm" width="60%" />
                      <Box h="4" bg="red.100" borderRadius="sm" mt="4" />
                      <Box h="2" bg="gray.200" borderRadius="sm" />
                      <Box h="2" bg="gray.200" borderRadius="sm" width="90%" />
                    </VStack>
                  </Box>

                  {/* Play Button Overlay */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="rgba(0, 0, 0, 0.7)"
                    borderRadius="full"
                    p="4"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "rgba(0, 0, 0, 0.8)",
                      transform: "translate(-50%, -50%) scale(1.1)",
                    }}
                  >
                    <FaPlay color="white" size="24" />
                  </Box>
                </Box>

                {/* Laptop bottom */}
                <Box h="3" bg="gray.700" mt="1" borderBottomRadius="xl" />
              </Box>
            </Box>
          </Box>

          {/* Right Side - Content */}
          <Box flex="1" color="white">
            <VStack spacing={6} align="flex-start">
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="blue.200"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Agents (Preview)
              </Text>

              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                color="white"
              >
                Transform service with autonomous agents
              </Heading>

              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="blue.100"
                lineHeight="1.7"
                maxW="500px"
              >
                Discover how AI service agents for Dynamics 365 can learn to
                address emerging issues, uncover new knowledge, and automate
                manual processes to boost business efficiency and reduce costs.
                Now available in public preview.
              </Text>

              <HStack spacing={4} pt={4}>
                <Button
                  bg="white"
                  color="blue.800"
                  size="lg"
                  fontWeight="semibold"
                  px={8}
                  py={6}
                  borderRadius="md"
                  _hover={{
                    bg: "blue.50",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s ease"
                >
                  Read the blog
                </Button>

                <Button
                  variant="outline"
                  borderColor="blue.300"
                  color="white"
                  size="lg"
                  fontWeight="semibold"
                  px={8}
                  py={6}
                  borderRadius="md"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Learn how to get started
                </Button>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Container>

      {/* Video Modal/Overlay (when video is playing) */}
      {isVideoPlaying && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.9)"
          zIndex="999"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => setIsVideoPlaying(false)}
        >
          {/* Video Player Container */}
          <Box
            position="relative"
            width="90%"
            maxW="800px"
            aspectRatio="16/9"
            bg="black"
            borderRadius="lg"
            overflow="hidden"
          >
            {/* Replace this with your actual video component */}
            {/* <video
              width="100%"
              height="100%"
              controls
              autoPlay
              src="path-to-your-video.mp4"
            >
              Your browser does not support the video tag.
            </video> */}

            {/* Placeholder for video */}
            <Box
              w="full"
              h="full"
              bg="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontSize="xl"
            >
              Video Player Placeholder
              <br />
              (Replace with actual video component)
            </Box>

            {/* Close button */}
            <Button
              position="absolute"
              top="4"
              right="4"
              size="sm"
              variant="ghost"
              color="white"
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoPlaying(false);
              }}
            >
              ✕
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AutonomousAgentsSection;

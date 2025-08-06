import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import backgroundImage from "../images/ProductDemo -BG.avif";
import videoThumbnail from "../images/InteractiveDemo-thumbnail.avif";
// import demoVideo from "../videos/demo-video.mp4";

const AIProTipsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlayVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => setIsVideoModalOpen(false);

  const playButtonSize = useBreakpointValue({ base: "60px", md: "72px" });

  return (
    <Box
      id="product-demo-section"
      minH="100vh"
      py={16}
      px={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack spacing={12} maxW="6xl" mx="auto" textAlign="center">
        {/* Header Section */}
        <VStack spacing={4}>
          <Text
            fontSize="sm"
            color="gray.600"
            fontWeight="medium"
            letterSpacing="wider"
          >
            PRODUCT DEMO
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
            maxW="4xl"
          >
            AI Pro Tips series
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="4xl" lineHeight="tall">
            Meet Copilot, your everyday AI companion that works wherever you do.
            Service representatives now have an AI assistant to help them ramp
            up, solve complex issues faster, and free up more time to build
            relationships with customers.
          </Text>
        </VStack>

        {/* Video Thumbnail with Play Button */}
        <Box
          position="relative"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
          maxW="800px"
        >
          <Image
            src={videoThumbnail}
            alt="AI Demo Thumbnail"
            cursor="pointer"
            onClick={handlePlayVideo}
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.03)" }}
          />
          <Button
            onClick={handlePlayVideo}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="blackAlpha.300"
            _hover={{ bg: "blackAlpha.400" }}
            variant="ghost"
            borderRadius="0"
          >
            <Box
              w={playButtonSize}
              h={playButtonSize}
              bg="white"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.1)" }}
            >
              <FaPlay
                color="gray.800"
                size="20px"
                style={{ marginLeft: "2px" }}
              />
            </Box>
          </Button>
        </Box>
      </VStack>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideo}
        size="6xl"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" />
          <Box borderRadius="2xl" overflow="hidden">
            <video
              width="100%"
              height="auto"
              autoPlay
              controls
              // src={demoVideo}
            >
              Your browser does not support the video tag.
            </video>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AIProTipsSection;

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// TODO: Import background image
import backgroundImage from "../images/New-Overview-BG.avif";

// TODO: Import section images
import CopilotImage from "../images/customer-workshop.avif";
import InsightsImage from "../images/2.avif";
import ConnectImage from "../images/3.avif";
import CollaborateImage from "../images/4.avif";

const OverviewSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>("copilot");

  const sectionImages: Record<string, string | null> = {
    copilot: CopilotImage,
    insights: InsightsImage,
    connect: ConnectImage,
    collaborate: CollaborateImage,
  };

  const solutions = [
    {
      id: "copilot",
      title: "Resolve issues faster with Copilot",
      description:
        "Save service representatives time by using Copilot in Dynamics 365 Customer Service to help diagnose, troubleshoot, and draft customer responses.",
      linkText: "Read the infographic",
    },
    {
      id: "insights",
      title: "Get real-time insights",
      description:
        "Monitor service performance and customer satisfaction with comprehensive analytics and reporting tools.",
      linkText: "Learn more",
    },
    {
      id: "connect",
      title: "Connect with the right service rep",
      description:
        "Route customers to the most qualified agents using intelligent routing and skills-based assignment.",
      linkText: "Explore routing",
    },
    {
      id: "collaborate",
      title: "Collaborate live in Teams",
      description:
        "Enable seamless collaboration between service teams with integrated Microsoft Teams functionality.",
      linkText: "Discover collaboration",
    },
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <Box
      bg="gray.50"
      py={{ base: 12, md: 16, lg: 20 }}
      minH="80vh"
      id="overview-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Add horizontal padding/margin for spacing on sides */}
      <Container maxW="7xl" px={{ base: 6, md: 8, lg: 12 }}>
        {/* Header */}
        <VStack align="start" gap={4} mb={{ base: 8, md: 12, lg: 16 }}>
          <Text
            fontSize="sm"
            fontWeight="600"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            OVERVIEW
          </Text>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="gray.900"
            fontWeight="700"
            maxW="4xl"
            lineHeight="1.2"
          >
            Empower your service reps and transform customer service
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="1.6">
            Exceed customer expectations by delivering exceptional service on
            any channel.
          </Text>
        </VStack>

        {/* Main Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 8, md: 12, lg: 16 }}
          align="flex-start"
        >
          {/* Left Panel - Custom Accordion */}
          <Box
            flex="1"
            maxW={{ base: "full", lg: "500px" }}
            position="relative"
            w="full"
          >
            {/* Moving blue indicator line - covers entire active section content */}
            {activeSection && (
              <Box
                w={{ base: "3px", md: "4px" }}
                position="absolute"
                left="0"
                borderRadius="full"
                style={{
                  backgroundColor: "#0078d4",
                  top: `${
                    solutions.findIndex((s) => s.id === activeSection) * 88
                  }px`,
                  height: `${88 + (activeSection ? 120 : 0)}px`,
                  transition: "all 0.4s ease-in-out",
                }}
                zIndex={2}
              />
            )}

            <Box pl={{ base: 4, md: 6, lg: 8 }} position="relative">
              {solutions.map((solution, index) => (
                <Box key={solution.id} position="relative">
                  {/* Accordion Header */}
                  <Flex
                    as="button"
                    onClick={() => toggleSection(solution.id)}
                    align="center"
                    justify="space-between"
                    w="full"
                    py={{ base: 4, md: 6 }}
                    px={{ base: 2, md: 0 }}
                    textAlign="left"
                    _hover={{ bg: "transparent" }}
                    _focus={{ outline: "none" }}
                    position="relative"
                    minH={{ base: "60px", md: "76px" }}
                  >
                    <HStack gap={3}>
                      <Heading
                        size={{ base: "md", md: "lg" }}
                        fontWeight="600"
                        color={
                          activeSection === solution.id ? "#0078d4" : "gray.900"
                        }
                        transition="color 0.3s ease"
                      >
                        {solution.title}
                      </Heading>
                    </HStack>

                    <Box
                      color={
                        activeSection === solution.id ? "#0078d4" : "gray.600"
                      }
                      fontSize="20px"
                      transition="color 0.3s ease"
                    >
                      {activeSection === solution.id ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </Box>
                  </Flex>

                  {/* Accordion Content */}
                  <Box
                    overflow="hidden"
                    transition="all 0.4s ease-in-out"
                    maxH={activeSection === solution.id ? "200px" : "0"}
                    opacity={activeSection === solution.id ? 1 : 0}
                  >
                    <Box pb={{ base: 4, md: 6 }} pr={{ base: 4, md: 8 }}>
                      <VStack align="start" gap={4}>
                        <Text
                          color="gray.700"
                          fontSize="md"
                          lineHeight="1.6"
                          fontWeight="400"
                        >
                          {solution.description}
                        </Text>
                        <Link
                          fontSize="md"
                          textDecoration="underline"
                          _hover={{
                            textDecoration: "underline",
                          }}
                          style={{ color: "#0078d4" }}
                        >
                          {solution.linkText}
                        </Link>
                      </VStack>
                    </Box>
                  </Box>

                  {/* Divider */}
                  {index < solutions.length - 1 && (
                    <Box h="1px" bg="gray.300" />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* TODO: Right Panel - Dynamic Images will be added here */}
          <Box
            flex="1"
            minH={{ base: "300px", md: "400px", lg: "500px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            order={{ base: -1, lg: 0 }}
          >
            <Box
              w="full"
              h={{ base: "300px", md: "400px", lg: "500px" }}
              borderRadius={{ base: "lg", md: "xl" }}
              overflow="hidden"
              position="relative"
            >
              {activeSection && sectionImages[activeSection] ? (
                <Box
                  key={activeSection}
                  w="full"
                  h="full"
                  position="relative"
                  style={{
                    animation: "slideInFromRight 0.6s ease-out forwards",
                  }}
                >
                  <img
                    src={sectionImages[activeSection]}
                    alt={`${activeSection} visualization`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  w="full"
                  h="full"
                  bg="gray.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="2px dashed"
                  borderColor="gray.300"
                  borderRadius="xl"
                >
                  <VStack gap={4} color="gray.500">
                    <Text fontSize="lg" fontWeight="600">
                      {activeSection
                        ? activeSection.charAt(0).toUpperCase() +
                          activeSection.slice(1)
                        : "Select"}{" "}
                      Image
                    </Text>
                    <Text fontSize="sm" textAlign="center">
                      Active:{" "}
                      <Text
                        as="span"
                        fontWeight="600"
                        style={{ color: "#0078d4" }}
                      >
                        {activeSection || "none"}
                      </Text>
                    </Text>
                  </VStack>
                </Box>
              )}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OverviewSection;

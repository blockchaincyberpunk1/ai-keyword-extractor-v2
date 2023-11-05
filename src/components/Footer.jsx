// Importing components from Chakra UI that are used in the Footer.
import { Box, Text, Image, Flex } from '@chakra-ui/react';
// Importing the logo image from the assets directory.
import logo from '../assets/openai.svg';

// Footer component definition.
const Footer = () => {
  // Using Box as a container with a blue background, a top margin, and full width.
  return (
    <Box
      bg='blue.600' // Background color is set to a shade of blue.
      marginTop={50} // Top margin to push the footer down the page.
      width="full" // The width is set to take up the full container width.
      m={0} // Margin reset to 0 on all sides.
      p={0} // Padding reset to 0 on all sides.
    >
      {/* Flex container to center the content horizontally and vertically */}
      <Flex
        justifyContent='center' // Centers children horizontally in the container.
        alignItems='center' // Centers children vertically in the container.
        paddingY={4} // Vertical padding is set to provide space above and below the content.
        width="full" // The width is set to take up the full container width.
      >
        {/* Image of the OpenAI logo with a set width */}
        <Image
          src={logo} // Source of the logo image.
          width={50} // Width of the logo image.
          alt="OpenAI Logo" // Alternative text for the image for accessibility.
        />
        {/* Text next to the image indicating what powers the application */}
        <Text
          marginLeft={2} // Left margin to provide space between the image and text.
          color="white" // Text color set to white for contrast against the blue background.
        >
          Powered By Open AI
        </Text>
      </Flex>
    </Box>
  );
};

// Exporting the Footer component to be used in other parts of the application.
export default Footer;

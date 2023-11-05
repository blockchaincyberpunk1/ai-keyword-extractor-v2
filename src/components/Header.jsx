// Importing the necessary components from Chakra UI and the logo from assets.
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light.svg';

// Header component that will be displayed at the top of the app.
const Header = () => (
  // The return statement has been omitted due to the arrow function's implicit return.
  <>
    {/* Image component displaying the logo. Self-closing tag is used for simplicity. */}
    <Image
      src={logo} // Path to the logo image.
      alt='logo' // Alternative text for the image.
      width={{ base: '250px', md: '300px' }} // Responsive width property.
      marginBottom='0.5rem' // Margin-bottom using rem units for consistency.
    />
    {/* Heading component for the title of the app. */}
    <Heading
      color='white' // Text color set to white.
      marginBottom='1rem' // Margin-bottom using rem units.
    >
      AI Keyword Extractor {/* The text displayed in the heading. */}
    </Heading>
    {/* Text component for the subtitle or instruction below the heading. */}
    <Text
      fontSize='1.5625rem' // Font size set in rem units equivalent to 25px.
      textAlign='center' // Text aligned to the center.
    >
      Paste in your text below and we'll extract the keywords for you.
    </Text>
  </>
);

// Exporting the Header component for use in other parts of the application.
export default Header;

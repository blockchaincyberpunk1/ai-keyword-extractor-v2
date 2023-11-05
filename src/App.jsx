import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
// Importing custom components that make up the different sections of the app.
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';

const App = () => {
  // State for storing the keywords returned from the API.
  const [keywords, setKeywords] = useState([]);
  // State to control the visibility of the modal.
  const [isOpen, setIsOpen] = useState(false);
  // State to handle the loading state when the API call is being made.
  const [loading, setLoading] = useState(false);

  // Function to call the OpenAI API and extract keywords from text.
  const extractKeywords = async (text) => {
    setLoading(true); // Set loading to true while the API call is in progress.
    setIsOpen(true); // Open the modal to show the loading indicator or results.

    // Configuration object for the fetch API call.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Using an environment variable for the API key for security and configurability.
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Specifying the model to be used.
        prompt: // The prompt for the API, including the text to be processed.
          'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
          text,
        // Additional parameters to control the API's behavior.
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      // Making the API call to the OpenAI endpoint.
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
      const json = await response.json();
      // Logging the response to the console for debugging.
      console.log(json.choices[0].text.trim());
      // Setting the keywords in the state to the result from the API.
      setKeywords(json.choices[0].text.trim());
    } catch (error) {
      // Logging the error to the console if the API call fails.
      console.error(error);
    } finally {
      // Ensuring that we turn off the loading state after the API call.
      setLoading(false);
    }
  };

  // Function to close the modal.
  const closeModal = () => {
    setIsOpen(false);
  };

  // The main JSX for the App component.
  return (
    // Box serves as the main container for the app with a blue background.
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      {/* Container to center the content and limit its width. */}
      <Container maxW='3xl' centerContent>
        {/* Header, TextInput, and Footer components are rendered within the Container. */}
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      {/* Modal that will display the keywords or the loading state. */}
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

// Exporting the App component as the default export of this module.
export default App;

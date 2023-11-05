// Importing necessary hooks and components from React and Chakra UI libraries.
import { useState } from 'react';
import { Button, Textarea } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

// TextInput component definition, accepting `extractKeywords` as a prop.
// This function will be called with the text input when the form is submitted.
const TextInput = ({ extractKeywords }) => {
  // State hook to keep track of the text entered in the textarea.
  const [text, setText] = useState('');
  // Chakra UI's hook for displaying toast notifications.
  const toast = useToast();

  // Predefined toast configuration for empty text input scenario.
  // This object won't be re-created on every render.
  const emptyTextToast = {
    title: 'Text field is empty.',
    description: 'Please enter some text to extract keywords.',
    status: 'error', // The type of toast - in this case, an error message.
    duration: 5000, // The toast will be visible for 5 seconds.
    isClosable: false, // The toast cannot be dismissed by the user.
  };

  // Function to handle the text submission.
  const submitText = () => {
    // If the text state is empty, show a toast and stop the function execution.
    if (text === '') {
      toast(emptyTextToast);
      return;
    }
    // If text is present, call the `extractKeywords` function with the text.
    extractKeywords(text);
  };

  // Component's rendered JSX.
  return (
    <>
      <Textarea
        aria-label="Input for text" // Accessibility label for screen readers.
        bg='blue.400' // Background color of the textarea.
        padding={4} // Padding inside the textarea.
        marginTop={6} // Margin on top of the textarea.
        height={200} // Fixed height of the textarea.
        color='white' // Text color inside the textarea.
        value={text} // Controlled value from the component's state.
        // Event handler for text change, using event destructuring.
        onChange={({ target: { value } }) => setText(value)}
      />

      <Button
        bg='blue.500' // Background color of the button.
        color='white' // Text color of the button.
        marginTop={4} // Margin on top of the button.
        width='100%' // Button width to occupy the full container width.
        _hover={{ bg: 'blue.700' }} // Background color on hover.
        onClick={submitText} // Event handler for button click.
        isDisabled={text === ''} // The button is disabled if there's no text.
      >
        Extract Keywords
      </Button>
    </>
  );
};

// Exporting the TextInput component for use in other parts of the application.
export default TextInput;

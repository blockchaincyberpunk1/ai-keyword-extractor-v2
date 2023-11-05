// Importing the necessary UI components from the Chakra UI library.
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from '@chakra-ui/react';

// Functional component for displaying a modal dialog.
// It accepts `keywords`, `loading`, `isOpen`, and `closeModal` as props.
const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => (
  // Modal component that uses the `isOpen` prop to control its visibility
  // and `closeModal` as the handler for when the modal is requested to be closed.
  <Modal isOpen={isOpen} onClose={closeModal}>
    <ModalOverlay /> {/* Dimmed overlay behind the modal */}
    <ModalContent> {/* Container for modal's content */}
      <ModalHeader>Keywords</ModalHeader> {/* Header part of the modal */}
      <ModalCloseButton /> {/* Button component to close the modal */}

      {/* Body of the modal, which will either display a loading indicator or the keywords */}
      <ModalBody display='flex' alignItems='center' justifyContent='center'>
        {/* Conditional rendering: */}
        {loading ? (
          // Shows a circular progress bar when the `loading` prop is true
          <CircularProgress isIndeterminate color='blue.300' />
        ) : (
          // When not loading, displays the `keywords` passed as a prop
          <Text>{keywords}</Text>
        )}
      </ModalBody>

      {/* Footer part of the modal containing the close button */}
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={closeModal}>
          Close {/* Text displayed on the button */}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

// Exporting the KeywordsModal component for use in other parts of the application.
export default KeywordsModal;

import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function ModalTest() {
  const useDisclosure = () => {
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return { isOpen, onOpen, onClose };
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Moral Body Test</ModalBody>
          <ModalFooter>
            <button onClick={() => onClose()}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

import React from 'react'

import {
    Drawer as ChakraDrawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'

export default function Drawer({
    title,
    isOpen,
    onClose,
    children,
    cancelText,
    confirmText,
    onConfirm,
}) {
    return (
        <ChakraDrawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{title}</DrawerHeader>

                <DrawerBody>
                    {children}
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        {cancelText}
                    </Button>
                    <Button colorScheme='blue' onClick={onConfirm}>{confirmText}</Button>
                </DrawerFooter>
            </DrawerContent>
        </ChakraDrawer>
    )
}
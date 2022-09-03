import React from 'react'
import Drawer from '../../components/Drawer'
import Header from '../../components/Header'
import TableClients from './components/TableClients'

import {
    useDisclosure,
    Input,
} from '@chakra-ui/react'

import './styles.css'

export default function Clients() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className='client-container'>
            <Header title={'Clientes'} buttonTitle={'Novo'} onPress={onOpen} />

            <TableClients />

            <Drawer
                title={'Novo cliente'}
                isOpen={isOpen}
                onClose={onClose}
                cancelText={'Cancelar'}
                confirmText={'Salvar'}
                onConfirm={() => { alert('Novo cliente') }}
                children={
                    <Input placeholder='Nome' />
                }
            />
        </div>
    )
}

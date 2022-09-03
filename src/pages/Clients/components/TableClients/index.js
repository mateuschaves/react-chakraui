import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

import './styles.css'
import Alert from '../../../../components/Alert'
import Drawer from '../../../../components/Drawer'

export default function TableClients() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure()
  const cancelRef = React.useRef()

  function renderActionButtons() {
    return (
      <div className='action-buttons'>
        <IconButton colorScheme='blue' aria-label='Editar cliente' icon={<EditIcon />} onClick={onOpenDrawer} />
        <IconButton colorScheme='red' aria-label='Deletar cliente' icon={<DeleteIcon />} onClick={onOpen} />
      </div>
    )
  }

  return (
    <>
      <TableContainer className='table-container'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th width={'2xl'}>Nome</Th>
              <Th>Telefone</Th>
              <Th align='center' justifyContent={'center'} alignItems={'center'}>Qnt. Pets</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody className='tr'>
            <Tr>
              <Td>Mateus</Td>
              <Td>81 973248342</Td>
              <Td>1</Td>
              <Td>{renderActionButtons()}</Td>
            </Tr>
            <Tr>
              <Td>Mateus</Td>
              <Td>81 973248342</Td>
              <Td>1</Td>
              <Td>{renderActionButtons()}</Td>
            </Tr>
            <Tr>
              <Td>Mateus</Td>
              <Td>81 973248342</Td>
              <Td>1</Td>
              <Td>{renderActionButtons()}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Alert
        title={'Deletar cliente'}
        confirmActionMessage={'Tem certeza que deseja deletar este cliente?'}
        confirmActionButtonText={'Deletar'}
        cancelActionButtonText={'Cancelar'}
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
      />

      <Drawer
        title={'Editar cliente'}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        cancelText={'Cancelar'}
        confirmText={'Salvar'}
        onConfirm={() => alert('editar cliente')}
        children={null
        }
      />
    </>
  )
}

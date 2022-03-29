import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeadersProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeadersProps ) {
     
    return (
        <div>
        <Container>
            <Content >
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>

            </Content>
        </Container>
        </div>
       
    )
}
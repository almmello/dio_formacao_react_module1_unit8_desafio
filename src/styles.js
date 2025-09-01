import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #374161;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        padding: 20px;
        height: 100vh;
        min-height: 100vh;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`

export const Head = styled.div`
    background-color: transparent;
    width: 50%;
    max-width: 250px;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        width: 60%;
        max-width: 200px;
    }

    @media (max-width: 480px) {
        width: 70%;
        max-width: 180px;
    }
`

export const Foot = styled.div`
    background-color: transparent;
    width: 50%;
    max-width: 250px;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        width: 60%;
        max-width: 200px;
    }

    @media (max-width: 480px) {
        width: 70%;
        max-width: 180px;
    }
`

export const Content = styled.div`
    background-color: #dbe2ea;
    width: 80%;
    Margin: 50px;
    max-width: 300px;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        width: 90%;
        margin: 30px;
        max-width: 350px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 480px) {
        width: 95%;
        margin: 20px;
        max-width: 400px;
        border-radius: 20px;
    }
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        gap: 2px;
    }

    @media (max-width: 480px) {
        gap: 3px;
    }
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #374161;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 5vh;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        padding: 20px;
        height: 100vh;
        min-height: 100vh;
        justify-content: flex-start;
        padding-top: 8vh;
    }

    @media (max-width: 480px) {
        padding: 15px;
        padding-top: 10vh;
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
    margin: 50px;
    margin-bottom: 80px;
    max-width: 300px;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-size: 0;
    box-sizing: border-box;
    gap: 0;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        width: 90%;
        margin: 30px;
        margin-bottom: 60px;
        max-width: 350px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 480px) {
        width: 95%;
        margin: 20px;
        margin-bottom: 50px;
        max-width: 400px;
        border-radius: 20px;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 90px;
    box-sizing: border-box;
    
    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        height: 75px;
    }

    @media (max-width: 480px) {
        height: 60px;
    }
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


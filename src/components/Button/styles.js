import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 0;
    border: 1px solid #ffffff;
    background-color: #C1C6C8;
    color: #54585A;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    transition: all 0.1s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    
    &:hover {
        opacity: 0.6;
    }

    &:active {
        transform: scale(0.95);
        opacity: 0.8;
    }

    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        font-size: 28px;
        height: 70px;
        touch-action: manipulation;
    }

    @media (max-width: 480px) {
        font-size: 32px;
        height: 80px;
    }
`
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #ffffff;
    background-color: #C1C6C8;
    color: #54585A;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    flex: 1;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    transition: all 0.1s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    
    &:hover {
        opacity: 0.6;
    }

    &:active {
        transform: scale(0.95);
        opacity: 0.8;
    }

    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        padding: 25px 20px;
        font-size: 28px;
        min-height: 60px;
        touch-action: manipulation;
    }

    @media (max-width: 480px) {
        padding: 30px 20px;
        font-size: 32px;
        min-height: 70px;
    }
`
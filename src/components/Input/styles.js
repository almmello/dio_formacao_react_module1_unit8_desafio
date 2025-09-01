import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #5D7975;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    input {
        width: 100%;
        height: 60px;
        background-color: #5D7975;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        color: #07272D;
        padding: 0 30px;
        text-align: right;
        box-sizing: border-box;
    }

    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        height: 70px;
        
        input {
            height: 70px;
        }
    }

    @media (max-width: 480px) {
        height: 80px;
        
        input {
            height: 80px;
        }
    }
`
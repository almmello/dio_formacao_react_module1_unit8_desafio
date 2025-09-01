import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${props => props.backgroundColor};
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  max-width: 400px;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Estilos para dispositivos móveis */
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    min-width: auto;
    max-width: none;
  }
`;

export const NotificationIcon = styled.span`
  font-size: 20px;
  flex-shrink: 0;
`;

export const NotificationContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  flex: 1;
`;

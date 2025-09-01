import React, { useEffect } from 'react';
import { NotificationContainer, NotificationContent, NotificationIcon } from './styles';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      default:
        return 'ℹ️';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return '#ff6b6b';
      case 'warning':
        return '#ffd93d';
      case 'success':
        return '#6bcf7f';
      default:
        return '#4dabf7';
    }
  };

  return (
    <NotificationContainer 
      backgroundColor={getBackgroundColor()}
      onClick={onClose}
    >
      <NotificationIcon>{getIcon()}</NotificationIcon>
      <NotificationContent>{message}</NotificationContent>
    </NotificationContainer>
  );
};

export default Notification;

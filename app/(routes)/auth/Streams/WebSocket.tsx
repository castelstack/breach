'use client';

import { useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

const WebSocketClient = ({ onDataReceived, setIsLoading }: any) => {
  const getSocketUrl = useCallback(() => {
    const authToken = sessionStorage.getItem('auth-token');
    if (authToken) {
      return `wss://frontend-test-api.mvm-tech.xyz/ws?token=${authToken}`;
    }
    return null;
  }, []);

  const { lastJsonMessage, readyState } = useWebSocket(getSocketUrl(), {
    onMessage: (event) => {
      const data = JSON.parse(event.data);
      onDataReceived(data);
    },
  });

  useEffect(() => {
    if (readyState === WebSocket.OPEN) {
      setIsLoading(true);
    }

    if (lastJsonMessage) {
      setIsLoading(false);
    }
  }, [lastJsonMessage, readyState, setIsLoading]);

  return null;
};

export default WebSocketClient;

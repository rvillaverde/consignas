import React from 'react';

export interface WebContentContextType {
  content: Record<string, string>;
  error: boolean;
  loading: boolean;
}

const WebContentContext = React.createContext<WebContentContextType>({
  content: {},
  error: false,
  loading: false,
});

export default WebContentContext;

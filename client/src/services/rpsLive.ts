import { w3cwebsocket as W3CWebSocket } from 'websocket';

export const rpsLive = new W3CWebSocket(
  'ws://bad-api-assignment.reaktor.com/rps/live'
);

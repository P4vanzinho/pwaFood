import { waBotConfig } from '@/config/waBot'
import socket from 'socket.io-client'

const URL = waBotConfig.url as string

export const socketIo = socket.connect('ws://localhost:8000', {
  transports: ['websocket'],
  autoConnect: true,
  reconnection: true,
})

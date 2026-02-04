import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { chatSocketDto } from "./socket.dto";

@WebSocketGateway({
    cors: {
        origin: [process.env.FRONTEND_URL ?? 'http://localhost:3000'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    }
})
export class SocketService {
    constructor() { }

    @WebSocketServer()
    server: Server;

    handleRecievedMessage(@MessageBody() data: chatSocketDto) {
        this.server.emit('chat', { data: data });
    }

}
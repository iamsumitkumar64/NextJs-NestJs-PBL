import { MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { chatSocketDto } from "./socket.dto";
import { AuthService } from "../utils/auth.service";
import { UserRepository } from "../repository/user.repository";

@WebSocketGateway({
    cors: {
        origin: [process.env.FRONTEND_URL ?? 'http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true,
    }
})
export class SocketService implements OnGatewayConnection {
    constructor(
        private readonly authService: AuthService,
        private readonly userRepo: UserRepository
    ) { }

    @WebSocketServer()
    server: Server;

    private activeUsers = new Map<string, string>();

    async handleConnection(client: Socket) {
        const token = client.handshake.auth.token;
        if (!token) {
            console.log("Empty Token : Socket Handle Connection");
            return;
        }
        const tokenPayload: any = await this.authService.verifyJwtToken(token);
        if (tokenPayload) {
            const user = await this.userRepo.findUser(tokenPayload.email);
            if (user) {
                this.activeUsers.set(String(user.id), client.id);
                this.userRepo.setUserStatus(user.id, true);
                this.server.emit("onlineStatus", { userId: user.id, status: true });
                console.log("User Connected: ", user.id);
            }
        }
    }

    async handleDisconnect(client: Socket) {
        for (const [userId, socketId] of this.activeUsers.entries()) {
            if (socketId === client.id) {
                this.activeUsers.delete(userId);
                this.userRepo.setUserStatus(Number(userId), false);
                this.server.emit("onlineStatus", { userId: Number(userId), status: false });
                console.log("User Disconnected: ", userId);
            }
        }
    }

    @SubscribeMessage('onMessage')
    handleRecievedMessage(receiver_id: number, inserted_message: any) {
        const activeUserId = this.activeUsers.get(String(receiver_id));
        if (!activeUserId) {
            console.log(`User ${receiver_id} not connected.`);
            return;
        }
        this.server.to(activeUserId).emit('onMessage', { data: inserted_message })
    }

}
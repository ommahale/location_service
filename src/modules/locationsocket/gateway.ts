import { WebSocketGateway } from "@nestjs/websockets";
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketServer } from "@nestjs/websockets/decorators";
import { UserLocationDto } from "./dto/user.location.dto";
import {Server} from 'socket.io'

@WebSocketGateway({cors:{origin:'*'}})
export class LocationGateway{
    @WebSocketServer()
    server:Server;
    @SubscribeMessage('getlocation')
    onNewMessage(@MessageBody() userLocationDto:UserLocationDto,@ConnectedSocket() client){
        // console.log(userLocationDto);
        client.broadcast.emit(userLocationDto.uid,userLocationDto);
    }
}
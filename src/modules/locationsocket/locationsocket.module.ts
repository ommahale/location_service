import { Module } from '@nestjs/common';
import { LocationGateway } from './gateway';

@Module({
    providers:[LocationGateway],
})
export class LocationsocketModule {}

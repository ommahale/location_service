import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsocketModule } from './modules/locationsocket/locationsocket.module';

@Module({
  imports: [LocationsocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { TrackModule } from './track/track.module';

@Module({
    imports: [PrismaModule, TrackModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

import {Module} from '@nestjs/common';
import {ListeningService} from './listening.service';
import {ListeningController} from './listening.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
    controllers: [ListeningController],
    providers: [ListeningService],
    imports: [PrismaModule]
})
export class ListeningModule {
}

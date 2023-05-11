import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {PrismaModule} from "./prisma/prisma.module";
import {TrackModule} from './track/track.module';
import {ListeningModule} from './listening/listening.module';
import {PlaylistModule} from './playlist/playlist.module';
import {AuthorModule} from './author/author.module';
import {ArtistModule} from './artist/artist.module';

@Module({
    imports: [PrismaModule, TrackModule, ListeningModule, PlaylistModule, AuthorModule, ArtistModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

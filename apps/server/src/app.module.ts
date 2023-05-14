import {Module} from "@nestjs/common";
import {PrismaModule} from "./prisma/prisma.module";
import {TrackModule} from "./track/track.module";
import {ListeningModule} from "./listening/listening.module";
import {PlaylistModule} from "./playlist/playlist.module";
import {ArtistModule} from "./artist/artist.module";

@Module({
    imports: [PrismaModule, TrackModule, ListeningModule, PlaylistModule, ArtistModule]
})
export class AppModule {
}

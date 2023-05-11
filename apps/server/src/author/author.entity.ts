import {Author} from "@prisma/client";
import {TrackEntity} from "../track/track.entity";
import {ArtistEntity} from "../artist/artist.entity";
import {ApiProperty} from "@nestjs/swagger";

export class AuthorEntity implements Author {

    @ApiProperty()
    id_track: number

    @ApiProperty()
    id_artist: number

    @ApiProperty()
    Track: TrackEntity

    @ApiProperty()
    Artist: ArtistEntity
}
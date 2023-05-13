import {Author} from "@prisma/client";
import {TrackEntity} from "../track/track.entity";
import {ArtistEntity} from "../artist/artist.entity";
import {ApiProperty} from "@nestjs/swagger";

export class AuthorEntity implements Author {

    @ApiProperty()
    public id_track: number;

    @ApiProperty()
    public id_artist: number;

    @ApiProperty()
    public Track: TrackEntity;

    @ApiProperty()
    public Artist: ArtistEntity;
}
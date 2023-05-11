import {Listening} from "@prisma/client";
import {TrackEntity} from "../track/track.entity";
import {PlaylistEntity} from "../playlist/playlist.entity";
import {ApiProperty} from "@nestjs/swagger";

export class ListeningEntity implements Listening {

    @ApiProperty()
    date: Date

    @ApiProperty()
    id_track: number

    @ApiProperty()
    id_playlist: number

    @ApiProperty()
    Track: TrackEntity

    @ApiProperty()
    Playlist: PlaylistEntity
}
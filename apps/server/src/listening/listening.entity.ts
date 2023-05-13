import {Listening} from "@prisma/client";
import {TrackEntity} from "../track/track.entity";
import {PlaylistEntity} from "../playlist/playlist.entity";
import {ApiProperty} from "@nestjs/swagger";

export class ListeningEntity implements Listening {

    @ApiProperty()
    public date: Date;

    @ApiProperty()
    public id_track: number;

    @ApiProperty()
    public id_playlist: number;

    @ApiProperty()
    public track: TrackEntity;

    @ApiProperty()
    public playlists: PlaylistEntity;

}

export class CountListening {

    @ApiProperty()
    public date: string;

    @ApiProperty()
    public count: number;

}
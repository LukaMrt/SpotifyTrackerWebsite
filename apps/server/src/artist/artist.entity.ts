import {Artist} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";
import {TrackEntity} from "../track/track.entity";

export class ArtistEntity implements Artist {

    @ApiProperty()
    public id: number;

    @ApiProperty()
    public url: string;

    @ApiProperty()
    public uri: string;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public tracks: TrackEntity[];

}

export class ArtistCount {

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public count: number;

}
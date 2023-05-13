import {Playlist} from "@prisma/client";
import {ListeningEntity} from "../listening/listening.entity";
import {ApiProperty} from "@nestjs/swagger";

export class PlaylistEntity implements Playlist {

    @ApiProperty()
    public id: number;

    @ApiProperty()
    public url: string;

    @ApiProperty()
    public uri: string;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public Listening: ListeningEntity[];

}
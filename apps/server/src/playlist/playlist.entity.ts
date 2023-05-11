import {Playlist} from "@prisma/client";
import {ListeningEntity} from "../listening/listening.entity";
import {ApiProperty} from "@nestjs/swagger";

export class PlaylistEntity implements Playlist {

    @ApiProperty()
    id: number

    @ApiProperty()
    url: string

    @ApiProperty()
    uri: string

    @ApiProperty()
    name: string

    @ApiProperty()
    Listening: ListeningEntity[]
}
import {Track} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";
import {AuthorEntity} from "../author/author.entity";
import {ListeningEntity} from "../listening/listening.entity";

export class TrackEntity implements Track {
    @ApiProperty()
    id: number

    @ApiProperty()
    url: string

    @ApiProperty()
    uri: string

    @ApiProperty()
    name: string

    @ApiProperty()
    Author: AuthorEntity[]

    @ApiProperty()
    Listening: ListeningEntity[]
}
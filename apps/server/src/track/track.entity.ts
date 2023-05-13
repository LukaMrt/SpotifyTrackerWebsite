import {Track} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";
import {AuthorEntity} from "../author/author.entity";
import {ListeningEntity} from "../listening/listening.entity";

export class TrackEntity implements Track {
    @ApiProperty()
    public id: number;

    @ApiProperty()
    public url: string;

    @ApiProperty()
    public uri: string;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public Author: AuthorEntity[];

    @ApiProperty()
    public Listening: ListeningEntity[];

}
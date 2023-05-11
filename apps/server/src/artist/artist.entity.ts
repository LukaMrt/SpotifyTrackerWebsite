import {Artist} from "@prisma/client";
import {AuthorEntity} from "../author/author.entity";
import {ApiProperty} from "@nestjs/swagger";

export class ArtistEntity implements Artist {

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
}
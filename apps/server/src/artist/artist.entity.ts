import {Artist} from "@prisma/client";
import {AuthorEntity} from "../author/author.entity";
import {ApiProperty} from "@nestjs/swagger";

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
    public Author: AuthorEntity[];
}
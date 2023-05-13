import {Track} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";
import {ListeningEntity} from "../listening/listening.entity";
import {ArtistEntity} from "../artist/artist.entity";

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
    public artists: ArtistEntity[];

    @ApiProperty()
    public listening: ListeningEntity[];

}
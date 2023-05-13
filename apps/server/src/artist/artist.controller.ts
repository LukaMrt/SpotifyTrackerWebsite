import {Controller, Get, Query} from "@nestjs/common";
import {ArtistService} from "./artist.service";
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {ArtistEntity} from "./artist.entity";

@ApiTags("artist")
@Controller("artist")
export class ArtistController {
    constructor(private readonly artistService: ArtistService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of artists to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: ArtistEntity, isArray: true})
    async findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return {value: await this.artistService.findAll(limit)};
    }
}

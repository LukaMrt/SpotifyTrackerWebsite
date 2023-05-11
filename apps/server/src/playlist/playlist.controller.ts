import {Controller, Get, Query} from '@nestjs/common';
import {PlaylistService} from './playlist.service';
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {PlaylistEntity} from "./playlist.entity";

@ApiTags('playlist')
@Controller('playlist')
export class PlaylistController {
    constructor(private readonly playlistService: PlaylistService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of tracks to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: PlaylistEntity, isArray: true})
    findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return this.playlistService.findAll(limit);
    }

}

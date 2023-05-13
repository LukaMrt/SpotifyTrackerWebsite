import {Controller, Get, Param, Query} from "@nestjs/common";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {TrackEntity} from "./track.entity";
import * as utils from "../utils/parser";
import TrackService from "./track.service";

@ApiTags("track")
@Controller("track")
export class TrackController {
    constructor(private readonly trackService: TrackService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of tracks to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: TrackEntity, isArray: true})
    async findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return {value: await this.trackService.findAll(limit)};
    }

    @Get("name/:name")
    @ApiOkResponse({description: "Returns a track by name", type: TrackEntity})
    findByName(@Param("name") name: string) {
        return this.trackService.findByName(name);
    }

    @Get(":id")
    @ApiOkResponse({description: "Returns a track by id", type: TrackEntity})
    findById(@Param("id") id: string) {
        return this.trackService.findById(utils.parseInt(id, 0));
    }
}

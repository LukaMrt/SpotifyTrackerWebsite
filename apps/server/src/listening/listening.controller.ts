import {Controller, Get, Query} from "@nestjs/common";
import {ListeningService} from "./listening.service";
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {ListeningEntity} from "./listening.entity";

@ApiTags("listening")
@Controller("listening")
export class ListeningController {
    constructor(private readonly listeningService: ListeningService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of tracks to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: ListeningEntity, isArray: true})
    findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return this.listeningService.findAll(limit);
    }
}

import {Controller, Get, Query} from "@nestjs/common";
import {ListeningService} from "./listening.service";
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {CountListening, ListeningEntity} from "./listening.entity";

@ApiTags("listening")
@Controller("listening")
export class ListeningController {
    constructor(private readonly listeningService: ListeningService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of tracks to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: ListeningEntity, isArray: true})
    async findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return {value: await this.listeningService.findAll(limit)};
    }

    @Get("count")
    @ApiOkResponse({description: "Returns the number of listening", type: CountListening})
    @ApiQuery({name: "after", required: false, description: "Only count listening after this date", type: Date})
    @ApiQuery({name: "before", required: false, description: "Only count listening before this date", type: Date})
    @ApiQuery({
        name: "group",
        required: false,
        description: "Group by day, week, month or year",
        type: String,
        enum: ["day", "week", "month", "year"]
    })
    async count(@Query() query) {
        const after = utils.parseDate(query.after, new Date(0));
        const before = utils.parseDate(query.before, new Date());
        const group = utils.parseStringEnum(query.group, ["day", "week", "month", "year"], "id");
        return {listening: await this.listeningService.count(after, before, group)};
    }
}

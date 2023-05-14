import {Controller, Get, Query} from "@nestjs/common";
import {ArtistService} from "./artist.service";
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";
import {ArtistEntity} from "./artist.entity";
import {CountListening} from "../listening/listening.entity";

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

    @Get(":id")
    @ApiParam({name: "id", required: true, description: "Id of the artist", type: Number})
    @ApiOkResponse({description: "Returns a single artist by id", type: ArtistEntity})
    async findOne(@Query() query) {
        return {value: await this.artistService.findById(utils.parseInt(query.id, 10))};
    }

    @Get(":id/count")
    @ApiOkResponse({description: "Returns the listening number of the artist", type: CountListening})
    @ApiParam({name: "id", required: true, description: "Id of the artist", type: Number})
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
        const group = utils.parseStringEnum(query.group, ["day", "week", "month", "year"], "week");
        return {value: await this.artistService.count(utils.parseInt(query.id, 10), after, before, group)};
    }
}

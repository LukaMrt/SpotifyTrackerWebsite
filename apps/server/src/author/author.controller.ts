import {Controller, Get, Query} from '@nestjs/common';
import {AuthorService} from './author.service';
import * as utils from "../utils/parser";
import {ApiOkResponse, ApiQuery, ApiTags} from "@nestjs/swagger";
import {AuthorEntity} from "./author.entity";

@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Get()
    @ApiQuery({name: "limit", required: false, description: "Limit of authors to return", type: Number})
    @ApiOkResponse({description: "Returns all tracks", type: AuthorEntity, isArray: true})
    findAll(@Query() query) {
        const limit = utils.parseInt(query.limit, 10);
        return this.authorService.findAll(limit);
    }
}

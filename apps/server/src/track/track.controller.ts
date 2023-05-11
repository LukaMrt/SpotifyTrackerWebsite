import {Controller, Get, Req} from "@nestjs/common";
import {TrackService} from "./track.service";
import {Request} from "express";

@Controller("track")
export class TrackController {
    constructor(private readonly trackService: TrackService) {
    }

    @Get()
    findAll(@Req() req: Request) {

        const givenLimit = req.query.limit;
        let limit = 10;

        if (givenLimit !== undefined && !isNaN(Number(givenLimit))) {
            limit = Number(givenLimit);
        }

        return this.trackService.findAll(Number(limit));
    }
}

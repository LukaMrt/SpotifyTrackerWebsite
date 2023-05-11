import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class TrackService {

    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.track.findMany({
            take: limit,
        });
    }
}

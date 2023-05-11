import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class PlaylistService {

    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.playlist.findMany({
            take: limit,
        });
    }
}

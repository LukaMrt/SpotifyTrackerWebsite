import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ArtistService {

    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.artist.findMany({
            take: limit,
            include: {
                Author: {
                    include: {
                        Track: true
                    }
                }
            }
        });
    }
}

import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class TrackService {

    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.track.findMany({
            take: limit,
            include: {
                Author: true
            }
        });
    }

    findByName(name: string) {
        return this.prisma.track.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            take: 1
        })
    }

    findById(id: number) {
        return this.prisma.track.findMany({
            where: {
                id: {
                    equals: id
                }
            },
            take: 1
        })
    }
}

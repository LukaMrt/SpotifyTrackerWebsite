import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export default class TrackService {

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
        }).then((tracks) => {
            if (tracks.length === 0) {
                return null;
            }
            return tracks[0];
        });
    }

    findById(id: number) {
        return this.prisma.track.findMany({
            where: {
                id: {
                    equals: id
                }
            },
            take: 1
        }).then((tracks) => {
            if (tracks.length === 0) {
                return null;
            }
            return tracks[0];
        });
    }
}

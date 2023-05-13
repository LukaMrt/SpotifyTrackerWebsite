import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ListeningService {
    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.listening.findMany({
            take: limit,
            include: {
                Track: true,
                Playlist: true,
            }
        });
    }
}

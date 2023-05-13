import {Injectable} from "@nestjs/common";
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
        }).then((artists) => {
            return artists.map((artist) => {
                return {
                    id: artist.id,
                    url: artist.url,
                    uri: artist.uri,
                    name: artist.name,
                    tracks: artist.Author.map((author) => {
                        return author.Track;
                    })
                };
            });
        });
    }

    findById(id: number) {
        return this.prisma.artist.findUnique({
            where: {id}
        });
    }
}

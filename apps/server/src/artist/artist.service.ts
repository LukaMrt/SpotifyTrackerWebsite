import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import * as dateUtils from "../utils/dateUtils";

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

    async count(id: number, after: Date, before: Date, group: string) {
        const listenings = await this.prisma.$queryRaw(`
            SELECT L.date
            FROM Artist Ar
                     INNER JOIN Author Au ON Ar.id = Au.id_artist
                     INNER JOIN Track T on Au.id_track = T.id
                     INNER JOIN Listening L on T.id = L.id_track
            WHERE Ar.id = ${id}
              AND ${after.toISOString()} <= L.date <= ${before.toISOString()}
        ` as unknown as TemplateStringsArray) as { date: Date }[];

        if (group === "week") return dateUtils.groupByWeek(listenings);
        if (group === "month") return dateUtils.groupByMonth(listenings);
        if (group === "year") return dateUtils.groupByYear(listenings);

        return dateUtils.groupByDay(listenings);
    }
}

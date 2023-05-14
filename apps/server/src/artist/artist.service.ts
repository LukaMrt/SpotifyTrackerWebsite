import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import * as dateUtils from "../utils/dateUtils";
import {ArtistCount} from "./artist.entity";

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
        const listenings = (await this.prisma.$queryRaw`
            SELECT L.date
            FROM Artist Ar
                     INNER JOIN Author Au ON Ar.id = Au.id_artist
                     INNER JOIN Track T on Au.id_track = T.id
                     INNER JOIN Listening L on T.id = L.id_track
            WHERE Ar.id = ${id}
              AND ${after.toISOString()} <= L.date <= ${before.toISOString()}
        ` as unknown as TemplateStringsArray) as unknown as { date: Date }[];

        if (group === "week") return dateUtils.groupByWeek(listenings);
        if (group === "month") return dateUtils.groupByMonth(listenings);
        if (group === "year") return dateUtils.groupByYear(listenings);

        return dateUtils.groupByDay(listenings);
    }

    countAll(after: Date, before: Date) {
        return (this.prisma.$queryRaw`
            SELECT Ar.name, ROUND(COUNT(*) / 2) as count
            FROM Artist Ar
                     INNER JOIN Author Au ON Ar.id = Au.id_artist
                     INNER JOIN Track T on Au.id_track = T.id
                     INNER JOIN Listening L on T.id = L.id_track
            WHERE ${after.toISOString()} <= L.date <= ${before.toISOString()}
            GROUP BY Ar.name
        ` as unknown as TemplateStringsArray) as unknown as Promise<ArtistCount>;
    }
}

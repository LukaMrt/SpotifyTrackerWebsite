import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {Listening} from "@prisma/client";
import * as dateUtils from "../utils/dateUtils";
import {CountListening} from "./listening.entity";

@Injectable()
export class ListeningService {
    constructor(private prisma: PrismaService) {
    }

    async findAll(limit: number): Promise<Listening[]> {
        return this.prisma.listening.findMany({
            take: limit,
            include: {
                Track: true,
                Playlist: true,
            }
        });
    }

    async count(after: Date, before: Date, group: string): Promise<CountListening[]> {
        const listening: Listening[] = await this.prisma.listening.findMany({
            where: {
                date: {
                    gte: after,
                    lte: before,
                }
            }
        });

        if (group === "week") return dateUtils.groupByWeek(listening);
        if (group === "month") return dateUtils.groupByMonth(listening);
        if (group === "year") return dateUtils.groupByYear(listening);

        return dateUtils.groupByDay(listening);
    }
}

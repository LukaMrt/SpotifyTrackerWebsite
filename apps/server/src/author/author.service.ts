import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService) {
    }

    findAll(limit: number) {
        return this.prisma.author.findMany({
            take: limit,
            include: {
                Track: true,
                Artist: true
            }
        });
    }
}

import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
}
const client: PrismaClient = globalThis.prisma || new PrismaClient();

globalThis.prisma = client;

export default client;
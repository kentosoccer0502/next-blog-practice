import { prisma } from '@/lib/primsa'

export async function getPosts() {
    return await prisma.post.findMany({
        where: { published: true },
        include: { 
            author: {
                select: {
                    name: true
                }
            }
         },
         orderBy: {
            createdAt: 'desc'
         }
    })
}
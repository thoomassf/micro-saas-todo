import type { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const listUsersController = async (request: Request, response: Response) => {
  const user = await prisma.user.findMany({
    select: {
      id: true,
    }
  })

  response.send(user)
}
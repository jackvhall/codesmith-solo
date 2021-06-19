import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function index(_req: Request, res: Response): Promise<void> {
  const allResources = await prisma.resource.findMany()
  res.json({ resource: allResources })
}

export async function create(req: Request, res: Response): Promise<void> {
  const {
    body: { title, description },
  } = req
  const resource = await prisma.resource.create({
    data: {
      userId: 1,
      title,
      description,
      published: false,
    },
  })
  res.json({ resource })
}

export async function show(req: Request, res: Response): Promise<void> {
  const resource = await prisma.resource.findFirst({
    where: {
      userId: req.body.id,
    },
    include: {
      ResourceChild: true,
    },
  })
  res.json({ resource })
}

export async function destroy(req: Request, res: Response): Promise<void> {
  const deletedResource = await prisma.resource.delete({
    where: {
      id: parseInt(req.params.id),
    },
  })
  res.json({ resource: deletedResource })
}

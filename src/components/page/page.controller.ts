import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function index(_req: Request, res: Response): Promise<void> {
  const allResources = await prisma.page.findMany()
  res.json({ resource: allResources })
}

export async function create(req: Request, res: Response): Promise<void> {
  const {
    body: { title, description },
  } = req
  const resource = await prisma.page.create({
    data: {
      title,
      description,
    },
  })
  res.json({ resource })
}

export async function show(req: Request, res: Response): Promise<void> {
  const resource = await prisma.page.findFirst({
    where: {
      id: req.body.id,
    },
    include: {
      menu: true,
    },
  })
  res.json({ resource })
}

export async function destroy(req: Request, res: Response): Promise<void> {
  const deletedResource = await prisma.page.delete({
    where: {
      id: parseInt(req.params.id),
    },
  })
  res.json({ resource: deletedResource })
}

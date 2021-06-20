import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function index(_req: Request, res: Response): Promise<void> {
  const allResources = await prisma.menu.findMany()
  res.json({ menus: allResources })
}

export async function create(req: Request, res: Response): Promise<void> {
  const {
    body: { title, description },
  } = req
  const resource = await prisma.menu.create({
    data: {
      businessId: 1,
      title,
      description,
      published: false,
    },
  })
  res.json({ resource })
}

export async function show(req: Request, res: Response): Promise<void> {
  const resource = await prisma.menu.findFirst({
    where: {
      businessId: req.body.id,
    },
    include: {
      sections: true,
    },
  })
  res.json({ resource })
}

export async function destroy(req: Request, res: Response): Promise<void> {
  const deletedResource = await prisma.menu.delete({
    where: {
      id: parseInt(req.params.id),
    },
  })
  res.json({ resource: deletedResource })
}

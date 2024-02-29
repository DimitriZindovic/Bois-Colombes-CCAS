import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = (req, res) => {
  prisma.user
    .findMany()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
};

const getUser = (req, res) => {
  let id = Number(req.params.id);
  prisma.user
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

const createUser = (req, res) => {
  let user = req.body;
  prisma.user
    .create({
      data: {
        name: user.name,
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

export { getUsers, getUser, createUser };

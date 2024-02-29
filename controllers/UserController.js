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
        surname: user.surname,
        name: user.name,
        birth: user.birth,
        address: user.address,
        city: user.city,
        phone: user.phone,
        email: user.email,
        password: user.password,
        card_idenity: user.card_idenity,
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

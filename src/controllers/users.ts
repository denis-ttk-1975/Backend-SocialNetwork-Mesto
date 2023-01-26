import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import User from "./../models/users";

export const createUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;

  return User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const getUsers = (req: Request, res: Response) => {
  return User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const getUser = (req: Request, res: Response) => {
  const { _id } = req.params;
  return User.find({ _id: new ObjectId(_id) })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const patchUser = (req: Request, res: Response) => {
  const { name, about, avatar } = req.body;

  return User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

// router.patch("/:id", (req, res) => {
//   // обновим имя найденного по _id пользователя
//   User.findByIdAndUpdate(req.params.id, { name: "Виктор Гусев" })
//     .then((user) => res.send({ data: user }))
//     .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
// });

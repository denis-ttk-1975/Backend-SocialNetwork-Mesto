import { Request, Response } from "express";
import Card from "../models/cards";

interface IRequest extends Request {
  user?: Record<string, string>;
}

export const createCard = (req: IRequest, res: Response) => {
  const { name, link } = req.body;
  const userId = req.user?._id;
  if (req.user) {
    console.log(req.user._id); // _id станет доступен}
  }

  return Card.create({ name, link, owner: userId })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const getCards = (req: Request, res: Response) => {
  return Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const deleteCard = (req: Request, res: Response) => {
  const { cardId } = req.params;
  return Card.findByIdAndRemove(cardId).catch(() =>
    res.status(500).send({ message: "Произошла ошибка" })
  );
};

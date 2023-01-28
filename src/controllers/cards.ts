import { Request, Response } from "express";
import Card from "../models/cards";

interface IRequest extends Request {
  user?: Record<string, string>;
}

export const createCard = (req: IRequest, res: Response) => {
  const { name, link } = req.body;
  const userId = req.user?._id;

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
  return Card.findByIdAndRemove(cardId)
    .then(() => res.send({ message: `Карточка ${cardId} удалена` }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const likeCard = (req: IRequest, res: Response) => {
  const userId = req.user?._id;

  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
    { new: true }
  )
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

export const dislikeCard = (req: IRequest, res: Response) => {
  const userId = req.user?._id;
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: userId } }, // убрать _id из массива
    { new: true }
  )
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: "Произошла ошибка" }));
};

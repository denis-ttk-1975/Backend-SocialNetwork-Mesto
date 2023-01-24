import { Request, Response } from "express";
import { ObjectId } from "mongodb";

import Card from "./../models/cards";

export const createCard = (req: Request, res: Response) => {
  const { name, link } = req.body;

  return Card.create({ name, link })
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

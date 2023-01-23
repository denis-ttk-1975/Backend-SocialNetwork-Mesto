import { Router } from "express";

const router = Router(); // создали роутер

import { createUser, getUsers, getUser } from "../controllers/users";

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:_id", getUser);

export default router;

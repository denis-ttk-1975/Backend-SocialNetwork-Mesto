import { Router } from "express";
import { createUser, getUsers, getUser, patchUser } from "../controllers/users";

const router = Router(); // создали роутер

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:_id", getUser);
router.patch("/me", patchUser);

export default router;

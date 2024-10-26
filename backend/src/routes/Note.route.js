import { Router } from "express";
import {
  Notemessage,
  deleteNote,
  getNotes,
} from "../controllers/Note.contellers.js";
const router = Router();

router.route("/note").post(Notemessage);
router.route("/note").get(getNotes);
router.route("/note/:id").delete(deleteNote);

export default router;

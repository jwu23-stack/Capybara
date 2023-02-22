import express from 'express';
var router = express.Router();

import homeRouter from "./controllers/home.js";
import categoryRouter from "./controllers/category.js";
import classRouter from "./controllers/class.js";
import userRouter from "./controllers/user.js";

router.use("/home", homeRouter);
router.use("/category", categoryRouter);
router.use("/class", classRouter);
router.use("/user", userRouter)

export default router;
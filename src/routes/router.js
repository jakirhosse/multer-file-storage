const { Router } = require("express");
const imageRouter = require("./image/imageRoutes");
const router = Router();
router.use(imageRouter);
module.exports = router;

const multer = require("multer");
const storage = (path) =>
  multer.diskStorage({
    destination: "./uploads/" + path,
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}- ${file.originalname}`;
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });

const upload = (path) =>
  multer({
    storage: storage(path),
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });
module.exports = upload;
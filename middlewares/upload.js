import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({ dest: "uploads" });

export const remoteUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVESFILESORG_API_KEY,
    relativePath: "/ecommerce-api/*",
  }),
});

export const productImageUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVESFILESORG_API_KEY,
    relativePath: "/ecommerce-api/product-images/*",
  }),
});

export const productPicturesUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: process.env.SAVESFILESORG_API_KEY,
    relativePath: "/ecommerce-api/productPictures/*",
  }),
});

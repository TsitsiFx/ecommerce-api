import { Router } from "express";
import {
  addProduct,
  countProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.js";
import {
  localUpload,
  productPicturesUpload,
  remoteUpload,
} from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";

// Creates product router
const productsRouter = Router();

//Define routes
productsRouter.post(
  "/products",
  isAuthenticated,
  // productImageUpload.single("image"),
  productPicturesUpload.array("pictures", 3),
  addProduct
);

productsRouter.get("/products", getProducts);

productsRouter.get("/products", countProducts);

productsRouter.patch("/products/:id", isAuthenticated, updateProduct);

productsRouter.delete("/products/:id", isAuthenticated, deleteProduct);

//Export router

export default productsRouter;

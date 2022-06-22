const express=require("express")
const upload=require("../utils/multer")
const { addProduct, getProducts, getOneProduct, filterProduct, deleteProduct, updateProduct } = require("../controllers/productControllers")
const router=express.Router()
/**
 * @params POST /product/addproduct
 * @description ajout d'un nve produit
 * @acces public
 */
router.post("/addproduct", upload("products").single("file"),addProduct)
/**
 * @params GET /product
 * @description Get all products
 * @acces public
 */
router.get("/",getProducts)
/**
 * @params GET /product/:id
 * @description Get one product
 * @acces public
 */
router.get("/:id",getOneProduct)
/**
 * @params GET /product/:id
 * @description delete product 
 * @acces public
 */

router.delete("/:id",deleteProduct)
/**
 * @params PUT /product/:id
 * @description update product 
 * @acces public
 */
router.put("/:id",upload("products").single("file"),updateProduct)
module.exports=router
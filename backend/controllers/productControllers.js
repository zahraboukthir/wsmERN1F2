const prodcutModel = require("../models/productModel");
//add product
const addProduct = async (req, res) => {
  // const { name, price, qte } = req.body;
  const url = `${req.protocol}://${req.get("host")}`
  const {file}=req
  try {
    const newproduct = await new prodcutModel({...req.body});
    newproduct.image=`${url}/${file.path}`
    await newproduct.save();
    res.send({ product: newproduct, msg: "Product added successfully" });
  } catch (error) {
    // console.log(error)
    res.status(400).send({ msg: error.message });
  }
};
//get all products
const getProducts = async (req, res) => {
  try {
    const allProducts = await prodcutModel.find();
    res.send({ allProducts });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
//get one product by ID
const getOneProduct = async (req, res) => {
  try {
    const product = await prodcutModel.findById(req.params.id);
    res.send({ product });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    await prodcutModel.deleteOne({ _id: req.params.id });
    res.send({ msg: "Succussfully DELETED" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
const updateProduct = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`
  const {file}=req
  try {
    const updatedProduct = await prodcutModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body ,image:`${url}/${file.path}`} }
    );
    res.send({msg:"Product Succussfully "})
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};
const filterProductByprice=async(req,res)=>{
  const {price}=req.query
res.send(req.query)
  try {
   const Products= await prodcutModel.find({ })
   flitredProducts=Products.filter((el)=>el.price>=req.query.price)
   res.send({Products,flitredProducts})
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg: error.message });
  }

}
module.exports = {
  addProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,filterProductByprice
};

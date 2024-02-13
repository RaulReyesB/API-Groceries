import Product from "../models/products.model.js";
const productDao={};
productDao.getAll=async()=>{
    const products = await Product.find();
    return products;
};
productDao.getOne=async(barcode)=>{
    const product = await Product.findOne({barcode: barcode});
    return product;
};
productDao.getPrice=async()=>{
    const products = await Product.find({price: {$lt: 20}});
    return products;
}
productDao.getPrime=async(costo)=>{
    const products = await Product.find({price: {$gt: costo}});
    return products;
}
productDao.insertOne=async(product)=>{
    return await Product.create(product);
};
productDao.updateOne=async(barcode,product)=>{
    return await Product.findOneAndUpdate({barcode:barcode},product);
};
productDao.deleteOne=async(barcode)=>{
    return await Product.findOneAndDelete({barcode:barcode});
};
export default productDao;
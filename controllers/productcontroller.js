import productdata from "@/backend/models/productschema";

export const newproduct=async(req,res,next)=>{
    const product=await productdata.create(req.body);

    res.status(200).json({
        success:true,
        product,
    })
}
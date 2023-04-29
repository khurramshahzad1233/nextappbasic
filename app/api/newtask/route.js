import userdata from "@/models/userschema";
import connectdb from "@/utils/mongodb";
import {NextResponse} from "next/server"

export async function POST (req,res){
    try {

        const body=await req.json();
        await connectdb();
        console.log(body)
        await userdata.create(body);

        return NextResponse.json(
            {message:"message done successfully", status:200},
            // {status:200}
        )
        
    } catch (error) {
        return NextResponse.json(
            {message:"server error"},
            {status:500}
        )
       
        
    }
 
    
    

    
    
};


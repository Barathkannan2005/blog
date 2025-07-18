
export let GET = async (req) => {
    try {
        return Response.json({
            status: "Success",
            data: {
                product,
            }
        }, {status: 200});
    } catch (err) {
        console.log(err);
        return Response.json({
            status:"Failed",
            message: "Something went wrong"+err,
        }, {status: 500});
    }
}

export let POST = async (req) => {
    try {t
        const data = await request.json();
        if(!data.name){
            return Response.json({
                status:"Something went wrong",
                message:"Name is missing",
            }, {status: 400});
        }

        const newProduct={
            id:product.length+1,
            ...data,
        };
       product.push(newProduct);
        return Response.json({
            status:"200+created",
            data: {
                newProduct:product,
            }
        }, {status: 200});
       
    } catch (err) {
        console.log(err);
        return Response.json({
            status:"Failed",
            message: "Something went wrong"+err,
        }, {status: 500});
    }
    
}
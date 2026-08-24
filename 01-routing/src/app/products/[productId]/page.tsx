export default async function ProductDetails({
    params, //params is use to get dynamic segment detail
}:{
   params : Promise<{productId:string}>; //the type of params is a promise that results to an object
}){
    const productId = (await params).productId;
    return <h1>Details about Product "{productId}"</h1>;
} 
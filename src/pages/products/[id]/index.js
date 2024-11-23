import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function ProductDetail({product}){
    console.log("-product-",product)
    return (<>
    
        <Head>
            <title> Product Detail Page </title>
        </Head>

        <div 
            style={{background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%"}} 
            className="min-h-screen justify-items-center p-5"
        >
            <Link href="/products" className="flex justify-self-start mb-10">
                <IoArrowBack />
            </Link>

            <div className="w-full md:w-1/2">
                <p className="text-4xl text-center font-bold">{product.title}</p>
                <Image 
                    src={product.image} 
                    alt={product.title}
                    className="w-[180px] h-[220px] mix-blend-multiply justify-self-center mg-5"
                    width={180}
                    height={220}
                />
            
                <div>
                    <p>
                        <b>Category:</b> {product.category}
                    </p>

                    <p>
                        <b>Description:</b> {product.description}
                    </p>

                    <p>
                        <b>Price:</b> {product.price}
                    </p>

                    <p>
                        <b>Rating:</b> {product.rating.rate}
                    </p>

                    <p>
                        <b>Count:</b> {product.rating.count}
                    </p>
                </div>
            </div>
        </div>
        
    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await resp.json();
    
    return{
        props: { product }
    }
}
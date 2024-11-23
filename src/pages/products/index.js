import Head from "next/head"
import product1 from "../../../public/assets/images/img1.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Product({product}){
    console.log('- product -',product)
    return (
        <>
        <Head>
            <title> Product Page </title>

        </Head>
        <div style={{background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%"}} className="min-h-screen justify-items-center p-5">
            
            <p className="text-4xl font-bold mb-10"> Product </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {product.map((item)=>(
                    <Link
                        key={(item.id)}
                        href={`/products/${item.id}`}
                        className="mix-blend-multiply"
                    >
                        <div className="flex flex-col gap-3">
                            <Image 
                                src={item.image}
                                alt={item.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[250px] h-[260px] justify-self-center hover:scale-105"
                            />
                            <p className="font-semibold">{item.title}</p>
                            <p className="font-sm">${item.price}</p>

                        </div>
                            
                    </Link>
                ))} 
              {/* <div>
                    <Image 
                        src={product1}
                        alt="product 1"
                        className="w-[250px] h-[260px]"
                    />
                    <p className="text-lg font-semibold ">Nike Phantom GX 2</p>
                    <p>100$</p>
                </div>

                <div>
                    <Image 
                        src={product1}
                        alt="product 1"
                        className="w-[250px] h-[260px]"
                    />
                    <p className="text-lg font-semibold ">Nike Phantom GX 2</p>
                    <p>100$</p>
                </div>

                <div>
                    <Image 
                        src={product1}
                        alt="product 1"
                        className="w-[250px] h-[260px]"
                    />
                    <p className="text-lg font-semibold ">Nike Phantom GX 2</p>
                    <p>100$</p>
                </div>


                <div>
                    <Image 
                        src={product1}
                        alt="product 1"
                        className="w-[250px] h-[260px]"
                    />
                    <p className="text-lg font-semibold ">Nike Phantom GX 2</p>
                    <p>100$</p>
                </div>

               */} 




            </div>
        </div>
    </>)
}

export async function getServerSideProps() {
    const resp = await fetch(`https://fakestoreapi.com/products`);
    const product = await resp.json();
    
    return{
        props: { product }
    }
}
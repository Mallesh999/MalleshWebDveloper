import {useEffect, useState} from "react";
function ProdutsApi(){
    const[Product,setProduct]=useState();
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data =>
            setProduct(data)
        )
    },[])
    return(
        <div className="container mt-5 ">
            <header className="bg-danger text-white text-center p-1">
                <div>
                    <h1>
                        <span className="bi bi-cart"></span>
                        Online Shopping Mart
                    </h1>
                </div>
            </header>
            <div className=" mt-1 d-flex flex-wrap">
                {
                   Product && Product.products.map(items=>
                        <div className="card">
                            <div className="card-header text-center">
                                <b>{items.brand}</b>
                                <p>{items.category}</p>
                                <p>{items.warrantyInformation}</p>
                            </div>
                            {
                                items.images.map(values=>
                                    <div>
                                        <div className="card-body" key={values}>
                                            <img src={values} width={150} height={150}/>
                                            <dl>
                                                <dt>Price</dt>
                                                <dd>&#8377;{items.price}</dd>
                                                <dt>Percentage</dt>
                                                <dd>{items.discountPercentage}%</dd>
                                                <dt>Rating</dt>
                                                <dd>
                                                    <span className="bi bi-star-fill text-warning"></span>
                                                    {items.rating}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="card-footer d-grid">
                                            <button type="button" className="btn btn-warning">Add to cart</button>
                                            <button type="button" className="btn btn-danger mt-2">Buy Now</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default ProdutsApi;
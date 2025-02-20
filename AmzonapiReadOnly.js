import { useEffect, useState } from "react";

function AmazonapiReadOnly(){

    const[catrogiries,setCatogiry]=useState([])
    const[products,setProducts]=useState([])
    function loadData(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>{
            data.unshift("all");
            setCatogiry(data);
        })
    }
    function loadingData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data =>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        loadData()
        loadingData()
    },[])
    
    return(
        <div className="container mt-4">
            <header>
                <div className="bg-danger text-white text-center">
                    <h1>
                        <span className="bi bi-cart"></span>
                        Online Shopping Mart
                    </h1>
                </div>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select className="form-select">
                                {
                                    catrogiries.map(items =>
                                        <option key={items}>{items}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height :"600px"}}>
                {
                    products.map(values=>
                        <div className="card m-2 p-2 w-25" key={values}>
                            <img src={values.image} height={150} width={150} className="ms-4"/>
                            <div className="card-header"style={{height:"150px"}}>
                                <p>{values.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd><span>&#8377;</span>{values.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-warning"></span>
                                        {values.rating.rate}
                                        <span>[{values.rating.count}]</span>
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
                </main>
            </section>
        </div>
    )
}
export default AmazonapiReadOnly;
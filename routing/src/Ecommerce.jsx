import React, { useEffect, useState } from 'react'
import Header from './Common/Header'
import { useSearchParams } from 'react-router-dom'

export default function Ecommerce() {
    let [cate, setCate] = useState([])
    let [prods, setProds] = useState([])
    let [showProdcate, setShowprodCate] = useState("")

    let getcate = () => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setCate(data);
            })
    }



    let getProds = () => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProds(data.products)

            })
    }




    useEffect(() => {
        getcate()
        getProds()
    }, [])





    useEffect(() => {
        if (showProdcate !== "") {
            fetch(`https://dummyjson.com/products/category/${showProdcate}`)
                .then((res) => {
                    return res.json()
                }).then((data) => {
                    setProds(data.products)
                })
        }

    }, [showProdcate])



    return (
        <div>
            <Header />

            <div className='ecom'>
                <h1>Ecommerce Min Web</h1>

                <div className='cp'>

                    <Categories cate={cate} setShowprodCate={setShowprodCate} />


                    <div className='ecom-prods' >

                        <Products prods={prods} />

                    </div>

                </div>
            </div>
        </div>
    )
}



// Categories
function Categories({ cate, setShowprodCate }) {
    let allcate = cate.map((obj, i) => {

        return (
            <li key={i} onClick={() => setShowprodCate(obj.slug)}>{obj.name}</li>
        )
    })


    return (
        <div className='categories'>
            <h2>Categories</h2>
            <ul>
                {allcate}
            </ul>
        </div>
    )
}




// Products
function Products({ prods }) {
    let allprods = prods.map((obj, i) => {

        return (
            <div key={i}>
                <img src={obj.thumbnail} alt="" />
                <h2>{obj.title}</h2>
                <p>Rs {obj.price}</p>
            </div>
        )
    })

    return (
        <>
            {allprods}
        </>
    )
}

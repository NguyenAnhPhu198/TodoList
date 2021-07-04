import React from 'react'
import { Props } from '../todoList/style'

export default function demoProps(props) {
    let {products} = props;
    return (
        <div>
            <Props>
                <p>ID</p>
                <p>Name</p>
                <p>Quality</p>
                <p>UnitPrice</p>
                <p>Total</p>
            </Props>
            <Props>
                <p>{products.ID}</p>
                <p>{products.Name}</p>
                <p>{products.Quality}</p>
                <p>{products.UnitPrice}</p>
                <p>{products.Total}</p>
            </Props>

        </div>
    )
}

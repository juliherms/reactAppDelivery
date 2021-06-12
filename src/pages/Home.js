import React from 'react'
import pizzas from '../pizzasdata';
import Product from '../components/Product';

/**
 * This function responsible to diplay home page
 **/
export default function Home() {
    return (
        <div>
            <div className="row">
                {pizzas.map( pizza => {
                    return <div className="col-md-4"><div><Product product={pizza}/></div></div>
                })}
            </div>
        </div>
    )
}
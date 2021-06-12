import React from 'react'

/**
 * This function responsible to receive product and format your display 
 */
export default function Product({product}) {
    return(
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} className="img-fluid" style={{height: '200px', width: '200px'}}/>
            <div className="flex-container">
                <div className="w-100">
                    <p>Tamanho:</p>
                    <select>
                        {product.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className="w-100">
                    <p>Quantidade:</p>
                    <select>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}
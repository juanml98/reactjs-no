import React from "react";
import Item from "../items/items";

const ItemList = ({productos}) => {
    return (
        productos.map(p => (
            <Item
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            detalle={p.detalle}
            />
        )
    )
    )
}

export default ItemList
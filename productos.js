
const productos = [
    
    {id:1,nombre:"Remera Travis",precio: 5000,category: "Remeras",img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/011-ee40040b7b418e0ab816385695722865-640-0.webp',stock: 10,detalle: "Remera Overzise"},
    {id:2,nombre:"Buzo Travis",precio: 9000,category: "Buzo",img: 'https://http2.mlstatic.com/D_NQ_NP_2X_797318-MLA46043167239_052021-F.webp',stock: 10,detalle:"Buzo Travis Scott"},
    {id:3,nombre:"Jean Travis",precio: 4000,category:"Outlet",img: 'https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/0/3/03-02-2017_helmutlang_xtravisscottdistressedskinnyjean_natogreen_h03hm205-tq7_ja_1.jpg',stock: 10,detalle:"jean Travis Sc"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (productos)
        })
    }, 500)
}

export const getProductosById = (productId) => {

return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(productos.find(prod => prod.id === productId))
    },500)
})
}
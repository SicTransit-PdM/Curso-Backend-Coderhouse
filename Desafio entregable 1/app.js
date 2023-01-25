import Product from './models/Product.js'
import ProductManager from './models/ProductManager.js'

const adm = new ProductManager

const producto1 = new Product('Campera', 'Color azul', 600, 'thumbnail-link', '1241359301', 23)
const producto2 = new Product('Remera', 'Color negro', 800, 'thumbnail-link', '4918274987', 32)
const producto3 = new Product('Remera con codigo repetido', 'Color verde', 872, 'thumbnail-link', '4918274987', 41)

//const productos = [producto1, producto2, producto3]

adm.addProduct(producto1)
adm.addProduct(producto2)
adm.addProduct(producto3)
const id = 2
//console.log('Administrador =>', adm)
console.log('Obtener productos =>', adm.getProducts())
console.log(`Obtener producto por ID: id=${id} =>`, adm.getProductById(id))

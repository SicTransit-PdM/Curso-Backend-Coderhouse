import ProductManager from './models/ProductManager.js'

const adm = new ProductManager
const test = async () => {

    await adm.addProduct('Campera', 'Color azul', 600, 'thumbnail-link', '1241359301', 23)
    await adm.addProduct('Campera con un campo menos', 'Color azul', 600, 'thumbnail-link', '124135163')
    await adm.addProduct('Campera con un campo vacio', '', 600, 'thumbnail-link', '12514', 12)
    await adm.addProduct('Remera a modificar color', 'Color negro', 800, 'thumbnail-link', '4918274987', 32)
    await adm.addProduct('Remera con codigo repetido', 'Color verde', 872, 'thumbnail-link', '4918274987', 41)
    await adm.addProduct('Pantalon a eliminar', 'Color amarillo', 152, 'thumbnail-link', '346345431', 4132)
    console.log(adm.getProducts())
    let id = 2
    await adm.getProductById(id)

    await adm.updateProduct(2, null, 'Color violeta')
    await adm.deleteProduct(3)
}
test()
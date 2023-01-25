class ProductManager {
    constructor(){
        this.products = []
    }
    // Metodos
    addProduct(product){
        console.log(`Verificación de ${product.title} =>`, 'Código: ', product.code, 'Verificación:', this.products.some(p => p.code == product.code))
        if(this.products.some(p => p.code == product.code)){
            console.error(`The product "${product.title}" is already added to the list.`)
        } else {
            if(Object.values(product).includes(undefined)){
                console.error('All fields are required')
            } else {
            this.products.push(product)
            }
        }
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        return this.products.find(p => p.id == id) ?? console.error('Not found')
    }
}

export default ProductManager
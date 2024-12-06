servisor crado con Express u Node.JS.
Puerto 8080.  
2 endpoints: /products y /carts.  
----------------------------------------------------------------------------------------------------
/api/products/:

GET / lista los productos de la base de datos.
GET /:pid obtiene sólo el producto con el id proporcionado.
POST / Agrega un producto nuevo a la base de datos, se requieren los siguientes parametros:

title:String,
description:String
code:String
price:Number
status:Boolean
stock:Number
category:String
thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto.
Status es true por defecto.
Todos los campos son obligatorios, a excepción de thumbnails.

Con uuid, a los productos añadidos, se les genera automaticamente un ID.

PUT /:pid actualiza uno o mas parametros de un producto en la base de datos

DELETE /:pid elimina el producto con el pid indicado.
-----------------------------------------------------------------------------------------------------
/api/carts/:

POST / genera un nuevo carrito con su propio ID y un arrays con sus productos.

GET /:cid lista los productos del carrito con el parámetro cid (carrito id).

POST /:cid/product/:pid agrega un producto  al carrito seleccionado, agregándose como un objeto bajo el siguiente formato:

product: ID del producto.
quantity: cantidad del producto (se agrega de a 1).

Se implemento  file system, donde los archivos “products.json” y “cart.json”, respaldan la información.

Se implemento Middleware.





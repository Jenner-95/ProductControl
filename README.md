[![linux build](https://api.travis-ci.org/iroy2000/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/iroy2000/react-redux-boilerplate)
[![Dependency Status][david_img]][david_site]
[![Join the chat at https://gitter.im/iroy2000-react-redux-boilerplate/Lobby](https://badges.gitter.im/iroy2000-react-redux-boilerplate/Lobby.svg)](https://gitter.im/iroy2000-react-redux-boilerplate/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### TL;DR

Control de órdenes
Se desea simular un control de productos de diversos vendedores y ventas directas sobre los productos.
La idea es poder registrarse como vendedor, el vendedor tiene la capacidad de adminstrar sus productos con datos básicos, teniendo como mínimo, nombre y precio. El vendedor también puede comprar productos de otros vendedores.
Un usuario no registrado podrá solo ver el catálogo de productos y comprar
Se requiere:
1 Registro
2 CRUD productos
3 Autenticación – Requerido para el crud de productos
4 Compra de productos
5 Resultados (Reportes deseados para el vendedor):
5.a Total de ventas por producto (en moneda)
5.b Total de ventas global (en moneda)
5.c Promedio de los precios manejados en su catálogo de productos
Notas:
Un usuario no registrado no puede editar el catálogo de productos ni ver ningún reporte.
Un vendedor no puede alterar el catálogo de productos de otro vendedor.
Un vendedor no puede comprar productos de su propio catálogo.

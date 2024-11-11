import React from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
  {
    id: 2,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
  {
    id: 3,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
  {
    id: 4,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
  {
    id: 5,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
  {
    id: 6,
    nombre: 'Camiseta Básica',
    href: '#',
    imagenSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imagenAlt: "Frente de la camiseta básica para hombre en color negro.",
    precio: '$35',
    color: 'Negro',
  },
];

export default function Galeria() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Galeria de fotos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {productos.map((producto) => (
            <div key={producto.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={producto.imagenAlt}
                  src={producto.imagenSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={producto.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {producto.nombre}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{producto.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

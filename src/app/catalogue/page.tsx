'use client'

import { useState } from 'react'
import Image from 'next/image'
import productsData from '@/app/data/products.json'

type Product = {
  id: string
  title: string
  image: string
  description: string
}

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[15vh] w-full bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Our Product Catalogue
        </h1>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Explore Our Packaging Solutions
        </h2>
        {productsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsData.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className="relative group h-72 w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Full card image */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-lg">
                    {p.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No products found.</p>
        )}
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>
            <div className="relative h-72 w-full mb-4">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-contain rounded"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {selectedProduct.title}
            </h2>
            <p className="text-gray-700 text-sm">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

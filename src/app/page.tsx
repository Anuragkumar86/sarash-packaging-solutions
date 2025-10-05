'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const carouselImages = [
  '/images/bg2.png',
  '/images/bg.png',
  '/images/bg3.png'
]

const features = [
  {
    title: 'Hygienic & GMP Compliant',
    desc: 'Pharma-grade protocols ensuring safe and hygienic packaging.',
    icon: '🧴'
  },
  {
    title: 'Large Scale Supply',
    desc: 'High capacity production with strict quality checks & traceability.',
    icon: '🏭'
  },
  {
    title: 'On-Time Delivery',
    desc: 'Pan-India logistics support to deliver packaging reliably.',
    icon: '🚚'
  }
]

const latestProducts = [
  { title: '100ML Bottle', img: '/images/100ML Round.png' },
  { title: '60ML Tablet Container', img: '/images/Tablet Container 60ML.png' },
  { title: 'Dispenser Pump', img: '/images/DISPENSER PUMP.png' },
  { title: 'Mist Spray Pump', img: '/images/MIST SPRAY PUMP.png' }
]

export default function HomePage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="font-sans text-gray-900">

      {/* Hero Carousel */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {carouselImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0'
              }`}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-contain"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
                Packaging You Can Trust
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                Delivering pharma-grade bottles, closures, and packaging with excellence.
              </p>
              <Link
                href="/catalogue"
                className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg transition"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="container mx-auto py-16 grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
              About SARASH
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We supply PET-HDPE bottles, caps, closures and containers for
              Pharmaceuticals, Cosmetics & Healthcare companies. With strong partnerships
              and in-house expertise, SARASH ensures consistent quality, timely delivery,
              and pharma-grade excellence.
            </p>
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="flex-1 relative h-72 w-full md:h-96 rounded-2xl  hover:rounded-2xl">
            <Image
              src="/images/DP.png"
              alt="About SARASH"
              fill
              className="object-contain p-2 hover:scale-95"
            />
          </div>


          {/* <div className="relative h-72 w-full mb-4">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              fill
              className="object-contain rounded"
            />
          </div> */}




        </div>
      </section>

      {/* Latest Products */}
      <section className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {latestProducts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="relative h-70 w-full bg-gray-50">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-contain md:object-cover p-5"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-700">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/catalogue"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Full Catalogue
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Request a Quick Quote
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Share your requirements with us and our team will connect with you shortly.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

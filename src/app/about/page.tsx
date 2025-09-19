import Image from "next/image";

const industries = [
  {
    title: "Pharmaceuticals",
    desc: "Packaging solutions engineered for medicine stability and safety, including PET bottles, tablet containers, and droppers.",
    img: "/images/bg.png",
  },
  {
    title: "Cosmetics",
    desc: "Stylish and durable bottles, jars, and pumps tailored for skincare, haircare, and beauty products.",
    img: "/images/bg3.png",
  },
  {
    title: "Healthcare",
    desc: "Healthcare-grade packaging designed to meet hygiene protocols and withstand diverse liquid formulations.",
    img: "/images/bg2.png",
  },
];

const values = [
  {
    title: "Hygienic & GMP-Compliant",
    desc: "Strict protocols ensure products are safe, clean, and pharma-grade.",
    icon: "🧴",
  },
  {
    title: "Large-Scale Capacity",
    desc: "High-volume supply capability with reliable production and QC checks.",
    icon: "🏭",
  },
  {
    title: "Pharma-Grade Excellence",
    desc: "Our packaging is engineered for medicine stability and durability.",
    icon: "💊",
  },
  {
    title: "On-Time Every Time",
    desc: "Reliable logistics and pan-India delivery networks keep clients stress-free.",
    icon: "🚚",
  },
];

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center">
        <Image
          src="/images/bg2.png"
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            About SARASH Packaging Solutions
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto py-16 px-6">
        <div className="max-w-4xl mx-auto text-center leading-relaxed">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">SARASH Packaging Solutions</span> is a trusted supplier of PET & HDPE bottles,
            caps, closures, and containers suitable for the{" "}
            <strong>Pharmaceutical, Cosmetic, and Healthcare</strong> industries. With in-house expertise and strong
            manufacturing partnerships, we ensure{" "}
            <strong>consistent quality, supply chain reliability, and timely delivery</strong> across India.
          </p>
          <p className="mt-6 text-gray-700">
            Our mission is to deliver packaging that protects, preserves, and empowers brands to earn the trust of their customers.
            Every bottle, jar, or cap that leaves our facility is a reflection of our commitment to quality, safety, and service
            excellence.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Industries We Serve</h2>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition transform"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={ind.img}
                  alt={ind.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{ind.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">A Glimpse of Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/15ML Round 22M, 25MM.png",
            "/images/bg.png",
            "/images/MIST SPRAY PUMP.png",
            "/images/DISPENSER PUMP.png",
            "/images/100ML Round.png",
            "/images/Tablet Container 60ML.png",
            "/images/Brute 100ML, 200ML.png",
            "/images/DROPPER TIP Cap.png",
          ].map((img, i) => (
            <div key={i} className="relative h-44 rounded-xl overflow-hidden shadow hover:shadow-lg group">
              <Image
                src={img}
                alt={`Product ${i + 1}`}
                fill
                className="object-contain transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition transform"
            >
              <div className="text-5xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with SARASH</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100 leading-relaxed">
          With a proven track record in delivering packaging excellence,
          we stand as a reliable partner for brands looking to scale
          their operations with confidence. Whether you need bottles,
          jars, caps, or dispensing solutions — SARASH has you covered.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

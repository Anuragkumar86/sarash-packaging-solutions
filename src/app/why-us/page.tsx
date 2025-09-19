import Image from 'next/image'

const highlights = [
  {
    title: 'Hygienic & GMP-Compliant',
    desc: 'Our products follow strict Good Manufacturing Practices (GMP), ensuring every bottle, cap, and closure meets pharma-grade hygiene and safety standards.',
    img: '/images/hygene.png'
  },
  {
    title: 'Pharma-Grade Excellence',
    desc: 'Engineered for medicine stability, our packaging protects sensitive formulations from contamination, UV light, and moisture.',
    img: '/images/bg2.png'
  },
  {
    title: 'Large-Scale Capacity',
    desc: 'We are equipped to handle bulk requirements with consistency. Every batch undergoes strict quality checks and traceability protocols.',
    img: '/images/bg.png'
  },
  {
    title: 'On-Time Delivery',
    desc: 'With a reliable supply chain and pan-India logistics network, we ensure deliveries arrive when you need them — every time.',
    img: '/images/DISC TOP CAP.png'
  }
]

const extraUnique = [
  {
    title: 'Customized Solutions',
    desc: 'From bottle design to closure type, we offer tailor-made solutions that reflect your brand identity and product requirements.',
    icon: '🎨'
  },
  {
    title: 'Sustainability',
    desc: 'Committed to a greener future, we use recyclable PET & HDPE and optimize production to reduce waste and environmental impact.',
    icon: '🌱'
  },
  {
    title: 'Trusted Partnerships',
    desc: 'Our strong network of manufacturers and suppliers ensures that you benefit from consistent quality and innovation.',
    icon: '🤝'
  },
  {
    title: 'Innovation Driven',
    desc: 'We constantly explore new designs, materials, and packaging technologies to give your products a competitive edge.',
    icon: '🚀'
  }
]

export default function WhyUsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[15vh] w-full bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Why Choose SARASH?
        </h1>
      </section>

      {/* Core Highlights */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Strengths</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48 w-full">
                <Image src={h.img} alt={h.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{h.title}</h3>
                <p className="text-gray-700 text-sm">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Unique Factors */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Unique</h2>
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {extraUnique.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{e.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{e.title}</h3>
              <p className="text-gray-600 text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-blue-700 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Partner With SARASH</h2>
        <p className="max-w-2xl mx-auto mb-6">
          From pharma-grade reliability to custom design and sustainable practices, 
          SARASH is more than a packaging supplier — we are your growth partner.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-200"
        >
          Get in Touch
        </a>
      </section>

      
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-3">SARASH Packaging Solutions</h3>
          <p className="text-sm">
            Shiv City Colony, Bhagwanpur, Haridwar, Uttarakhand - 247661
          </p>
          <p className="text-sm">GSTIN: 05QZXPS9389J1ZK</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">📞 +91 7004101167</p>
          <p className="text-sm">📞 +91 7654154900</p>
          <p className="text-sm">✉️ sarash.pkg@gmail.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/why-us" className="hover:underline">Why Us</a></li>
            <li><a href="/catalogue" className="hover:underline">Catalogue</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

      </div>
      <div className="bg-gray-800 text-center py-3 text-sm">
        © {new Date().getFullYear()} SARASH Packaging Solutions — All Rights Reserved
      </div>
    </footer>
  )
}

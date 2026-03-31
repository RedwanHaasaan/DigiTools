import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-48 pt-12 md:pt-14 xl:pt-28 pb-4 md:pb-6">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 border-b border-gray-700 pb-10">
        
        {/* Brand */}
        <div className="lg:col-span-2 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            DigiTools
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0 xl:max-w-xs">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-4">Social Links</h4>
          <div className="flex justify-center sm:justify-start gap-3 mt-2">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-sm text-gray-500 text-center md:text-left">
        
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
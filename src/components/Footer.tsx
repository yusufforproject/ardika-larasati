
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-terracotta-800 to-terracotta-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="mx-auto mb-4 text-gold-300" size={48} />
          <h3 className="font-script text-3xl md:text-4xl text-gold-200 mb-4">
            Ardhika & Larasati
          </h3>
          <p className="font-serif text-terracotta-100 max-w-2xl mx-auto leading-relaxed">
            Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i merupakan kebahagiaan terbesar bagi kami. 
            Terima kasih atas perhatian dan kasih sayangnya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Pria */}
          <div className="text-center">
            <h4 className="font-serif text-xl font-semibold text-gold-200 mb-4">Keluarga Mempelai Pria</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-gold-300" />
                <span className="text-terracotta-100">+62 812-3456-7890</span>
              </div>
              <p className="text-terracotta-200 text-sm">Bapak Suyanto</p>
            </div>
          </div>

          {/* Venue */}
          <div className="text-center">
            <h4 className="font-serif text-xl font-semibold text-gold-200 mb-4">Lokasi Acara</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <MapPin size={16} className="text-gold-300" />
                <span className="text-terracotta-100">Gedung Graha Sejahtera</span>
              </div>
              <p className="text-terracotta-200 text-sm">Jl. Kebon Jeruk No. 123, Jakarta</p>
            </div>
          </div>

          {/* Contact Wanita */}
          <div className="text-center">
            <h4 className="font-serif text-xl font-semibold text-gold-200 mb-4">Keluarga Mempelai Wanita</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-gold-300" />
                <span className="text-terracotta-100">+62 812-9876-5432</span>
              </div>
              <p className="text-terracotta-200 text-sm">Bapak Bambang Wijaya</p>
            </div>
          </div>
        </div>

        {/* Email Contact */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta-700 px-6 py-3 rounded-full">
            <Mail size={20} className="text-gold-300" />
            <span className="text-terracotta-100">ardhika.larasati@gmail.com</span>
          </div>
        </div>

        {/* Islamic Quote */}
        <div className="text-center mb-8">
          <div className="bg-terracotta-700/50 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-terracotta-600">
            <p className="font-script text-xl text-gold-200 mb-2">
              "Barang siapa yang Allah kehendaki kebaikan baginya, maka Allah akan memberikan pemahaman agama kepadanya"
            </p>
            <p className="text-terracotta-200 text-sm font-serif">HR. Bukhari</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-terracotta-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-terracotta-300 text-sm mb-4 md:mb-0">
              © 2025 LoveInvi by YPro. Semua hak dilindungi.
            </p>
            <a
              href="https://loveinvi.y-pro.id"
              className="inline-block md:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-900 text-white font-semibold text-center transition duration-300 ease-in-out hover:scale-105 hover:brightness-110 mb-4 md:mb-0"
            >
              <Heart size={16} className="inline-block mr-2" /> Visit LoveInvi <Heart size={16} className="inline-block ml-2" />
            </a>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-gold-400" />
              <span className="text-terracotta-300 text-sm">Dibuat dengan cinta dan doa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Heart, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-batik-50 via-terracotta-50 to-gold-50 batik-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gold-200 to-batik-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-terracotta-200 to-gold-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Bismillah */}
          <div className="mb-8">
            <p className="font-script text-2xl text-terracotta-600 mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
            <p className="text-sm text-gray-600 font-serif italic">Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang</p>
          </div>

          {/* Opening */}
          <div className="mb-12 animate-slide-up">
            <h1 className="font-script text-4xl md:text-6xl text-gradient mb-4">
              Undangan Pertunangan
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
              <Heart className="mx-4 text-terracotta-400" size={24} />
              <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
            </div>
            <p className="font-serif text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Dengan penuh kebahagiaan dan rasa syukur kepada Allah SWT, kami mengundang Bapak/Ibu/Saudara/i 
              untuk hadir dalam acara pertunangan putra-putri kami
            </p>
          </div>

          {/* Couple Names */}
          <div className="mb-16 animate-slide-up delay-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gold-200">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <h2 className="font-script text-3xl md:text-5xl text-terracotta-600 mb-2">Ardhika</h2>
                  <p className="font-serif text-gray-600">Putra dari</p>
                  <p className="font-sans font-medium text-gray-800">Bapak Suyanto & Ibu Siti Nurhaliza</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-300 to-terracotta-300 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={32} />
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="font-script text-3xl md:text-5xl text-terracotta-600 mb-2">Larasati</h2>
                  <p className="font-serif text-gray-600">Putri dari</p>
                  <p className="font-sans font-medium text-gray-800">Bapak Bambang Wijaya & Ibu Dewi Sartika</p>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Venue Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up delay-500">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-batik-200">
              <Calendar className="mx-auto mb-3 text-batik-600" size={32} />
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">Waktu Acara</h3>
              <p className="text-gray-700">Minggu, 15 Desember 2024</p>
              <p className="text-gray-700">Pukul 10.00 - 14.00 WIB</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-batik-200">
              <MapPin className="mx-auto mb-3 text-batik-600" size={32} />
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">Tempat Acara</h3>
              <p className="text-gray-700">Gedung Graha Sejahtera</p>
              <p className="text-gray-700">Jl. Kebon Jeruk No. 123, Jakarta</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-terracotta-500 to-batik-500 hover:from-terracotta-600 hover:to-batik-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Lihat Detail Undangan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

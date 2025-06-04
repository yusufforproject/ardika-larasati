
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-batik-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">Detail Acara</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
            <div className="mx-4 w-3 h-3 bg-terracotta-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
          </div>
          <p className="font-serif text-lg text-gray-700 max-w-2xl mx-auto">
            Kami dengan rendah hati mengundang kehadiran Bapak/Ibu/Saudara/i untuk turut serta dalam 
            kebahagiaan kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-gold-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-script text-3xl text-terracotta-600 mb-6 text-center">Acara Pertunangan</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-batik-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-gray-800 mb-1">Tanggal</h4>
                    <p className="text-gray-700">Minggu, 15 Desember 2024</p>
                    <p className="text-sm text-gray-600">27 Jumadil Akhir 1446 H</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-batik-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-gray-800 mb-1">Waktu</h4>
                    <p className="text-gray-700">10.00 WIB - Selesai</p>
                    <p className="text-sm text-gray-600">Acara dimulai tepat waktu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-batik-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-gray-800 mb-1">Tempat</h4>
                    <p className="text-gray-700 font-medium">Gedung Graha Sejahtera</p>
                    <p className="text-gray-600">Jl. Kebon Jeruk Raya No. 123</p>
                    <p className="text-gray-600">Jakarta Barat 11530</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-8 bg-gradient-to-r from-batik-500 to-gold-500 hover:from-batik-600 hover:to-gold-600 text-white"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Buka di Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-gold-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-script text-3xl text-terracotta-600 mb-6 text-center">Kontak & Konfirmasi</h3>
              
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <p className="font-serif text-gray-700 leading-relaxed">
                    Untuk konfirmasi kehadiran dan informasi lebih lanjut, 
                    silakan hubungi kami melalui kontak di bawah ini:
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-batik-50 rounded-lg">
                    <Phone className="text-batik-600" size={24} />
                    <div>
                      <h4 className="font-serif font-semibold text-gray-800">Keluarga Mempelai Pria</h4>
                      <p className="text-gray-700">Bapak Suyanto: +62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-terracotta-50 rounded-lg">
                    <Phone className="text-terracotta-600" size={24} />
                    <div>
                      <h4 className="font-serif font-semibold text-gray-800">Keluarga Mempelai Wanita</h4>
                      <p className="text-gray-700">Bapak Bambang: +62 812-9876-5432</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gold-50 rounded-lg">
                    <Mail className="text-gold-600" size={24} />
                    <div>
                      <h4 className="font-serif font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-700">ardhika.larasati@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-gold-100 to-batik-100 rounded-lg">
                <p className="text-center font-serif text-gray-700">
                  <em>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
                  isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, 
                  dan dijadikan-Nya diantaramu rasa kasih dan sayang."</em>
                </p>
                <p className="text-center text-sm text-gray-600 mt-2 font-sans">QS. Ar-Rum: 21</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gold-200">
            <h3 className="font-script text-2xl text-terracotta-600 mb-4">Protokol Kesehatan</h3>
            <p className="font-serif text-gray-700 leading-relaxed">
              Demi kenyamanan bersama, kami menerapkan protokol kesehatan. 
              Mohon untuk tetap menjaga kesehatan dan menggunakan masker jika diperlukan. 
              Terima kasih atas perhatian dan kerjasamanya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

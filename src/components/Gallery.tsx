
import { Heart, Camera } from "lucide-react";

const Gallery = () => {
  // Placeholder images - in real implementation, these would be actual photos
  const photos = [
    { id: 1, alt: "Foto Ardhika & Larasati 1" },
    { id: 2, alt: "Foto Ardhika & Larasati 2" },
    { id: 3, alt: "Foto Ardhika & Larasati 3" },
    { id: 4, alt: "Foto Ardhika & Larasati 4" },
    { id: 5, alt: "Foto Ardhika & Larasati 5" },
    { id: 6, alt: "Foto Ardhika & Larasati 6" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-batik-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-gradient mb-4">Galeri Momen</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
            <Camera className="mx-4 text-terracotta-400" size={24} />
            <div className="h-px bg-gradient-to-r from-transparent via-terracotta-300 to-transparent w-32"></div>
          </div>
          <p className="font-serif text-lg text-gray-700 max-w-2xl mx-auto">
            Beberapa momen indah perjalanan cinta Ardhika & Larasati
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder for photo */}
              <div className="aspect-square bg-gradient-to-br from-gold-200 via-batik-200 to-terracotta-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <div className="text-center">
                  <Heart className="mx-auto mb-2 text-white/80" size={48} />
                  <p className="text-white/80 font-serif">{photo.alt}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-serif text-sm">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Love Quote */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold-200 shadow-xl">
            <Heart className="mx-auto mb-6 text-terracotta-400" size={48} />
            <blockquote className="font-script text-2xl md:text-3xl text-terracotta-600 mb-4">
              "Cinta sejati tidak pernah berakhir. Kekasih mungkin berpisah, tetapi mereka tidak pernah berpisah."
            </blockquote>
            <p className="text-gray-600 font-serif italic">- Khalil Gibran</p>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent w-24"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-terracotta-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <div className="w-2 h-2 bg-batik-400 rounded-full"></div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent w-24"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

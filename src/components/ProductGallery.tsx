import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  videoUrl?: string;
  productName: string;
}

const getVideoEmbedUrl = (url: string): string | null => {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1`;

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1`;

  return null;
};

const isDirectVideo = (url: string): boolean => {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url);
};

const getYouTubeThumbnail = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

type MediaItem = { type: "image"; src: string } | { type: "video"; src: string; thumbnail?: string };

const ProductGallery = ({ images, videoUrl, productName }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const mediaItems = useMemo<MediaItem[]>(() => {
    const items: MediaItem[] = images.map((src) => ({ type: "image", src }));
    if (videoUrl) {
      const thumbnail = getYouTubeThumbnail(videoUrl) || undefined;
      items.push({ type: "video", src: videoUrl, thumbnail });
    }
    return items;
  }, [images, videoUrl]);

  const current = mediaItems[selectedIndex];

  return (
    <div>
      {/* Main display */}
      <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50 mb-3 relative">
        <AnimatePresence mode="wait">
          {current?.type === "image" ? (
            <motion.img
              key={`img-${selectedIndex}`}
              src={current.src}
              alt={productName}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              loading="lazy"
            />
          ) : current?.type === "video" ? (
            <motion.div
              key="video"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDirectVideo(current.src) ? (
                <video
                  src={current.src}
                  className="w-full h-full object-contain bg-black/5"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                (() => {
                  const embedUrl = getVideoEmbedUrl(current.src);
                  return embedUrl ? (
                    <iframe
                      src={embedUrl}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={`Vídeo - ${productName}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Formato de vídeo não suportado
                    </div>
                  );
                })()
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {mediaItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
              selectedIndex === i ? "border-primary" : "border-border/50"
            }`}
          >
            {item.type === "image" ? (
              <img src={item.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <div className="w-full h-full relative">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                  <Play size={20} className="text-foreground fill-foreground" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

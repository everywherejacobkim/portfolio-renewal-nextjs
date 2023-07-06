import React, { useState } from 'react';
import Image from 'next/image';

const PhotoGallery = () => {
  const photos: string[] = [
    '/assets/images/gallery/g1.jpg',
    '/assets/images/gallery/g7.png',
    '/assets/images/gallery/g3.png',
    '/assets/images/gallery/g4.jpg',
    '/assets/images/gallery/g5.png',
    '/assets/images/gallery/g6.png',
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const openPhoto = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="grid grid-cols-6 gap-2 mt-8 mb-6">
      {photos.map((photo: string, index: number) => (
        <div key={index} className="relative rounded-md overflow-hidden">
          <Image
            src={photo}
            width={100}
            height={80}
            alt={`Photo ${index + 1}`}
            className="object-cover w-full h-full transition duration-300 transform hover:scale-125 cursor-pointer"
            onClick={() => openPhoto(photo)}
          />
          {selectedPhoto === photo && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="max-w-3xl max-h-3xl">
                <Image
                  src={selectedPhoto}
                  width={600}
                  height={600}
                  alt="Selected Photo"
                  className="object-contain w-full h-full cursor-pointer"
                  onClick={closePhoto}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;

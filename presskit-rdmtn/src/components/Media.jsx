import React from 'react';
import '../styles/Media.modules.css'; // Agrega estilos personalizados

function  MediaSection  ()  {
     const photos = [
          
          { src: '/images/photo1.jpg', alt: 'Foto 1', name: 'photo1.jpg' },
          { src: '/images/photo2.jpg', alt: 'Foto 2', name: 'photo2.jpg' },
          { src: '/images/photo3.jpg', alt: 'Foto 3', name: 'photo3.jpg' },
          { src: '/images/photo1.jpg', alt: 'Foto 1', name: 'photo1.jpg' },
          { src: '/images/photo2.jpg', alt: 'Foto 2', name: 'photo2.jpg' },
          { src: '/images/photo3.jpg', alt: 'Foto 3', name: 'photo3.jpg' },
          { src: '/images/photo1.jpg', alt: 'Foto 1', name: 'photo1.jpg' },
          { src: '/images/photo2.jpg', alt: 'Foto 2', name: 'photo2.jpg' },
          { src: '/images/photo3.jpg', alt: 'Foto 3', name: 'photo3.jpg' },
     ];

     const videos = [
          { src: '/videos/video1.mp4', title: 'Video 1', name: 'video1.mp4' },
          { src: '/videos/video2.mp4', title: 'Video 2', name: 'video2.mp4' },
          { src: '/videos/video1.mp4', title: 'Video 1', name: 'video1.mp4' },
          { src: '/videos/video2.mp4', title: 'Video 2', name: 'video2.mp4' },
          { src: '/videos/video1.mp4', title: 'Video 1', name: 'video1.mp4' },
          { src: '/videos/video2.mp4', title: 'Video 2', name: 'video2.mp4' },
     ];

     return (
          <div className="media-section">
               {/* Sección de fotos */}
               <section className="photos-section">
                    <h2>Fotos</h2>
                    <div className="photos-container">
                         {photos.map((photo, index) => (
                              <div key={index} className="photo-item">
                                   <img src={photo.src} alt={photo.alt} className="photo" />
                                   <a href={photo.src} download={photo.name} className="download-btn">
                                        Descargar
                                   </a>
                              </div>
                         ))}
                    </div>
               </section>

               {/* Sección de videos */}
               <section className="videos-section">
                    <h2>Videos</h2>
                    <div className="videos-container">
                         {videos.map((video, index) => (
                              <div key={index} className="video-item">
                                   <video controls className="video">
                                        <source src={video.src} type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                   </video>
                                   <a href={video.src} download={video.name} className="download-btn">
                                        Descargar
                                   </a>
                              </div>
                         ))}
                    </div>
               </section>
          </div>
     );
};

export default MediaSection;
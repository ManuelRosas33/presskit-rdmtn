import styles from '../styles/MusicProfiles.module.css';
import React from 'react';

function MusicProfiles() {
     return (
          
          <section className={styles.musicProfiles}>
               
               <div className={styles.embeds}>
               <h2>Mi Música</h2>
                    {/* Spotify Embed */}
                    <div className={styles.embed}>
                         <iframe
                              style={{ borderRadius: 12 }}
                              src="https://open.spotify.com/embed/artist/1R8sVOeXHzseN7ZyjW4unn?utm_source=generator&theme=0"
                              width="100%"
                              height={352}
                              frameBorder={0}
                              allowFullScreen=""
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              loading="lazy"
                         />

                    </div>
                    {/* SoundCloud Embed */}
                    <div className={styles.embed}>
                         <>
                              <iframe
                                   width="100%"
                                   height={300}
                                   scrolling="no"
                                   frameBorder="no"
                                   allow="autoplay"
                                   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1690697796&color=%23211410&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                              />
                              <div
                                   style={{
                                        fontSize: 10,
                                        color: "#cccccc",
                                        lineBreak: "anywhere",
                                        wordBreak: "normal",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        fontFamily:
                                             "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                                        fontWeight: 100
                                   }}
                              >
                                   <a
                                        href="https://soundcloud.com/rdmtn33"
                                        title="𝐑𝐃𝐌𝐓𝐍"
                                        target="_blank"
                                        style={{ color: "#cccccc", textDecoration: "none" }}
                                   >
                                   
                                   </a>{" "}
                                   ·{" "}
                                   <a
                                        href="https://soundcloud.com/rdmtn33/sets/releasetime"
                                        title="RELEASES 🥷"
                                        target="_blank"
                                        style={{ color: "#cccccc", textDecoration: "none" }}
                                   >
                                   
                                   </a>
                              </div>
                         </>

                    </div>

                    
               </div>
          </section>
     );
};

export default MusicProfiles;
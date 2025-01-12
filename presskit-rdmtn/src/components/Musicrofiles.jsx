import styles from '../styles/MusicProfiles.module.css';

const MusicProfiles = () => {
     return (
          <section className={styles.musicProfiles}>
               <h2>Mi Música</h2>
               <div className={styles.embeds}>
                    {/* SoundCloud Embed */}
                    <div className={styles.embed}>
                         <iframe
                              title="SoundCloud Profile"
                              width="100%"
                              height="166"
                              scrolling="no"
                              frameBorder="no"
                              allow="autoplay"
                              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/YOUR_PROFILE&color=%230055CC&auto_play=false&show_artwork=true"
                         ></iframe>
                    </div>

                    {/* Spotify Embed */}
                    <div className={styles.embed}>
                         <iframe
                              title="Spotify Profile"
                              src="https://open.spotify.com/embed/artist/YOUR_ARTIST_ID"
                              width="100%"
                              height="152"
                              frameBorder="0"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                         ></iframe>
                    </div>
               </div>
          </section>
     );
};

export default MusicProfiles;

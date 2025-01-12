import styles from '../styles/SocialLinks.module.css';
import React from 'react';

const SocialLinks = () => {
     const links = [
          { name: 'Soundcloud', url: 'https://soundcloud.com/rdmtn33' },
          { name: 'Instagram', url: 'https://www.instagram.com/rdmtn.arzfl/' },
          { name: 'Spotyfi', url: 'https://open.spotify.com/intl-es/artist/1R8sVOeXHzseN7ZyjW4unn?si=R6YBRAZnS66lIKt-4JzvWg' }
     ];

     return (
          <section className={styles.socialLinks}>
               <h2>Sígueme</h2>
               <div className={styles.links}>
                    {links.map((link) => (
                         <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                              {link.name}
                         </a>
                    ))}
               </div>
          </section>
     );
};

export default SocialLinks;

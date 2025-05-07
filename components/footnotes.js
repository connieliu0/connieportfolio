import { useEffect } from 'react';
import styles from '../styles/utils.module.css';

export default function Footnotes() {
  useEffect(() => {
    // Apply classes to footnote elements
    const footnotes = document.querySelector('.footnotes');
    if (footnotes) {
      // Style the footnotes container
      footnotes.classList.add(styles.footnotes);
      
      // Style the ordered list
      const ol = footnotes.querySelector('ol');
      if (ol) {
        ol.classList.add(styles.footnotesList);
      }
      
      // Style list items
      const lis = footnotes.querySelectorAll('li');
      lis.forEach(li => {
        li.classList.add(styles.footnoteItem);
      });
      
      // Handle all footnote links
      const links = document.querySelectorAll('a[href^="#fn"]');
      links.forEach(link => {
        // Add appropriate class
        if (link.getAttribute('href')?.startsWith('#fnref')) {
          link.classList.add(styles.footnoteBackLink);
        } else {
          link.classList.add(styles.footnoteLink);
        }

        // Prevent default behavior and handle scrolling
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
      
      // Style superscript references
      const sups = document.querySelectorAll('sup[id^="fnref"]');
      sups.forEach(sup => {
        sup.classList.add(styles.footnoteRef);
      });
    }
  }, []);

  return null;
} 
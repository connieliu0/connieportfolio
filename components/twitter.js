import { useEffect, useRef, useState } from 'react';
import styles from '../styles/utils.module.css';
import dynamic from 'next/dynamic';

// Create a client-side only version of the component
const TwitterCard = ({ url }) => {
  const tweetRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Component mounted, URL:', url);
    
    const loadTwitterScript = () => {
      if (typeof window === 'undefined') return;
      
      console.log('Checking for Twitter script...');
      
      if (!window.twttr) {
        console.log('Twitter script not found, loading...');
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
          console.log('Twitter script loaded successfully');
          setIsScriptLoaded(true);
        };
        script.onerror = (e) => {
          console.error('Error loading Twitter script:', e);
          setError('Failed to load Twitter script');
        };
        document.body.appendChild(script);
      } else {
        console.log('Twitter script already exists');
        setIsScriptLoaded(true);
      }
    };

    loadTwitterScript();
  }, []);

  useEffect(() => {
    const loadTweet = async () => {
      if (!isScriptLoaded || !url || !tweetRef.current) {
        console.log('Conditions not met for loading tweet:', {
          isScriptLoaded,
          hasUrl: !!url,
          hasRef: !!tweetRef.current
        });
        return;
      }

      console.log('Attempting to load tweet for URL:', url);

      try {
        // Create a blockquote element for the tweet
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'twitter-tweet';
        
        // Create the anchor element
        const anchor = document.createElement('a');
        anchor.href = url;
        
        // Append the anchor to the blockquote
        blockquote.appendChild(anchor);
        
        // Clear the container and append the blockquote
        tweetRef.current.innerHTML = '';
        tweetRef.current.appendChild(blockquote);

        // Load the tweet
        if (window.twttr && window.twttr.widgets) {
          await window.twttr.widgets.load(tweetRef.current);
          console.log('Tweet loaded successfully');
        } else {
          console.error('Twitter widgets not available');
          setError('Twitter widgets not available');
        }
      } catch (err) {
        console.error('Error loading tweet:', err);
        setError('Failed to load tweet');
      }
    };

    loadTweet();
  }, [url, isScriptLoaded]);

  if (error) {
    console.log('Rendering error state:', error);
    return <div className={styles.twitterCard}>Failed to load tweet: {error}</div>;
  }

  if (!url || (!url.includes('twitter.com') && !url.includes('x.com'))) {
    console.log('Invalid URL:', url);
    return null;
  }

  console.log('Rendering Twitter card for URL:', url);
  return (
    <div className={styles.twitterCard} ref={tweetRef}>
      {/* The tweet will be inserted here by the Twitter widget */}
    </div>
  );
};

// Export a dynamically imported version that only renders on the client side
export default dynamic(() => Promise.resolve(TwitterCard), {
  ssr: false,
  loading: () => <div>Loading tweet...</div>
});

import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  // const [quote, setQuote] = React.useState('Loading...');
  // const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    setImageUrl(`background.jpeg`);
    // setQuote('Show me the code');
    // setQuoteAuthor('Linus Torvalds');
  }, []);

  return (
    <main className='container-fluid bg-light text-center'>
      <div>

        <div className='title'>
          <h1>What is FamilyConnect?</h1>
        </div>

        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>

        <p>
          FamilyConnect brings your family closer together, no matter where they are in the world. 
          You can easily share photos, updates, recipes, and special moments in your family group chat, and instantly invite loved ones from around the globe to join in.
        </p>

      </div>
    </main>
  );
}

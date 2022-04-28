import React, { useEffect } from 'react';
import HoppyCards from './HoppyCards';
import Axios from 'axios';

export default function HoppyImageGetter() {
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/hoppy').then((response) => {
      setCards(response.data.map(values => ({
        ...values,
        image_url: values.picture
      })));
    });
  }, []);
  return (
      <HoppyCards cards={cards} />
  );
}

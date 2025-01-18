import React from 'react';
import ImageCarousel from '../../Component/ImageCarousel';

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <div className="container" style={{ padding: "20px" }}>
        <h1>Welcome to AppleRocket</h1>
        <p>
          Explore the best products and experience seamless shopping with AppleRocket!
        </p>
      </div>
    </div>
  );
}

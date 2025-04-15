// HeroSection.jsx
import React from "react";
import "../App.css";  // Giả sử ta định nghĩa style CSS trong App.css

function HeroSection() {
  const heroImage = "https://unsplash.com/photos/IfjHaIoAoqE/download?force=true";
  // URL ảnh mẫu từ Unsplash - thay bằng ảnh cặp đôi của bạn

  return (
    <section className="hero">
      {/* Ảnh nền */}
      <img src={heroImage} alt="couple" className="hero-img" />

      {/* Text chồng trên ảnh */}
      <div className="hero-text">
        <h1>Anna & Bình</h1>
        <p>Ngày cưới: 20/12/2025</p>
      </div>
    </section>
  );
}

export default HeroSection;

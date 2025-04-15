// Wishes.jsx
import React, { useState } from "react";

function Wishes() {
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([]);
  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const handleWishSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (wishMessage.trim() === "") return;
    // Tạo lời chúc mới và cập nhật danh sách
    const newWish = { name: wishName || "Khách", message: wishMessage };
    setWishes([...wishes, newWish]);
    // Xóa nội dung đã nhập
    setWishName("");
    setWishMessage("");
  };

  return (
    <section className="wishes-section">
      <h2>Lời chúc từ bạn bè</h2>
      <form className="wish-form" onSubmit={handleWishSubmit}>
        <input 
          type="text" 
          value={wishName} 
          onChange={(e) => setWishName(e.target.value)}
          placeholder="Tên bạn (tuỳ chọn)" 
        />
        <input 
          type="text" 
          value={wishMessage} 
          onChange={(e) => setWishMessage(e.target.value)}
          placeholder="Nhập lời chúc..." 
          required 
        />
        <button type="submit">Gửi lời chúc</button>
      </form>
      <div className="wish-list">
        {wishes.map((wish, index) => (
          <p key={index}>
            <strong>{wish.name}:</strong> {wish.message}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Wishes;

// RSVPForm.jsx
import React, { useState } from "react";

function RSVPForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn reload trang
    if (name.trim() === "") {
      alert("Vui lòng nhập họ tên.");
      return;
    }
    // Thông báo hoặc xử lý gửi dữ liệu
    alert(`Cảm ơn ${name}, đã xác nhận ${guests} người tham dự!`);
    // Reset form
    setName("");
    setGuests(1);
    setNote("");
  };

  return (
    <section className="rsvp-section">
      <h2>Xác nhận tham dự</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div>
          <label>Họ và tên:</label><br/>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên bạn"
            required 
          />
        </div>
        <div>
          <label>Số lượng khách:</label><br/>
          <input 
            type="number" 
            value={guests} 
            onChange={(e) => setGuests(+e.target.value)}
            min="1" 
            required 
          />
        </div>
        <div>
          <label>Ghi chú đặc biệt:</label><br/>
          <textarea 
            value={note} 
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ví dụ: cần món chay, dị ứng gì không..."
          />
        </div>
        <button type="submit">Gửi RSVP</button>
      </form>
    </section>
  );
}

export default RSVPForm;

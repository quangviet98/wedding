// CountdownTimer.jsx
import React, { useState, useEffect } from "react";

const targetDate = new Date("2025-12-20T00:00:00").getTime();
function CountdownTimer() {
  // Ngày cưới mục tiêu (ví dụ 20/12/2025)

  // Hàm tính toán thời gian còn lại
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) {
      // Nếu đã qua ngày cưới hoặc đúng ngày, trả về 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  console.log('%c [ timeLeft ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', timeLeft)

  // useEffect để cập nhật mỗi giây
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timerId); // dọn sạch interval khi unmount
  }, []);

  // Format hiển thị
  return (
    <section className="countdown-timer">
      <h2>Đếm ngược đến ngày cưới</h2>
      <div className="countdown">
        <span>{timeLeft.days} ngày</span> ·{" "}
        <span>{timeLeft.hours} giờ</span> ·{" "}
        <span>{timeLeft.minutes} phút</span> ·{" "}
        <span>{timeLeft.seconds} giây</span>
      </div>
    </section>
  );
}

export default CountdownTimer;

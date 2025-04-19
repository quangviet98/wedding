import { useEffect, useState } from "react";

const useElementScrollProgress = (ref: React.RefObject<HTMLElement | null>) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const el = ref.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Tổng quãng đường mà element sẽ đi qua viewport (từ khi top chạm vào đến khi bottom rời khỏi)
            const totalTravel = rect.height + viewportHeight;

            // Khoảng cách đã scroll (tính từ lúc top chạm vào đáy viewport đến khi bottom chạm vào top viewport)
            const distanceScrolled = viewportHeight - rect.top;

            const rawProgress = distanceScrolled / totalTravel;

            const clamped = Math.max(0, Math.min(1, rawProgress));
            setProgress(clamped);
        };

        handleScroll(); // chạy 1 lần đầu

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ref]);

    return progress; // từ 0 -> 1
};

export default useElementScrollProgress;

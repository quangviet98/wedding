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
            console.log('%c [ distanceScrolled ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', distanceScrolled)

            const rawProgress = distanceScrolled / totalTravel;

            const clamped = Math.max(0, Math.min(1, rawProgress));
            console.log('%c [ clamped ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', clamped)
            setProgress(clamped);
        };

        handleScroll(); // chạy 1 lần đầu

        document.body.addEventListener("scroll", handleScroll);
        return () => document.body.removeEventListener("scroll", handleScroll);
    }, [ref]);

    return progress; // từ 0 -> 1
};

export default useElementScrollProgress;

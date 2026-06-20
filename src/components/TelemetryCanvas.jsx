import React, { useRef, useEffect } from 'react';

const TelemetryCanvas = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const img = canvas.previousSibling; // Renders on top of the sibling image
        
        function resizeCanvas() {
            if (img) {
                const rect = img.getBoundingClientRect();
                canvas.width = rect.width || 400;
                canvas.height = rect.height || 400;
            }
        }

        // Fit canvas sizes
        if (img) {
            if (img.complete) {
                resizeCanvas();
            } else {
                img.addEventListener('load', resizeCanvas);
            }
        }
        window.addEventListener('resize', resizeCanvas);

        // Metrics elements
        const latencyVal = document.getElementById('latencyVal');
        const detectedVal = document.getElementById('detectedVal');
        const fpsVal = document.getElementById('fpsVal');

        // Bounding boxes target arrays
        const trackingBoxes = [
            { x: 0.15, y: 0.2, w: 0.35, h: 0.5, label: 'PERSON_01', conf: 0.98, color: '#2563eb', vx: 0.001, vy: 0.0005 },
            { x: 0.55, y: 0.1, w: 0.28, h: 0.38, label: 'PERSON_02', conf: 0.94, color: '#3b82f6', vx: -0.0008, vy: 0.0006 },
            { x: 0.4, y: 0.65, w: 0.45, h: 0.3, label: 'LAPTOP_DELL', conf: 0.99, color: '#8b5cf6', vx: 0, vy: 0 },
            { x: 0.05, y: 0.75, w: 0.2, h: 0.18, label: 'COFFEE_MUG', conf: 0.88, color: '#f97316', vx: 0.0002, vy: -0.0003 }
        ];

        let frameCount = 0;
        let animationFrameId;

        const draw = () => {
            if (canvas.width === 0 || canvas.height === 0) {
                resizeCanvas();
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const w = canvas.width;
            const h = canvas.height;

            // Draw center crosshair
            ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(w / 2 - 20, h / 2);
            ctx.lineTo(w / 2 + 20, h / 2);
            ctx.moveTo(w / 2, h / 2 - 20);
            ctx.lineTo(w / 2, h / 2 + 20);
            ctx.stroke();

            // Draw grid radar sweep
            const sweepY = (Math.sin(frameCount * 0.02) + 1) / 2 * h;
            ctx.strokeStyle = 'rgba(37, 99, 235, 0.1)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, sweepY);
            ctx.lineTo(w, sweepY);
            ctx.stroke();

            // Draw bounding targets
            trackingBoxes.forEach(box => {
                box.x += box.vx;
                box.y += box.vy;

                if (box.x < 0.02 || box.x + box.w > 0.98) box.vx *= -1;
                if (box.y < 0.02 || box.y + box.h > 0.98) box.vy *= -1;

                const bx = box.x * w;
                const by = box.y * h;
                const bw = box.w * w;
                const bh = box.h * h;

                ctx.strokeStyle = box.color;
                ctx.lineWidth = 1.5;
                const len = Math.min(15, bw * 0.2);

                // Corners
                ctx.beginPath();
                ctx.moveTo(bx, by + len); ctx.lineTo(bx, by); ctx.lineTo(bx + len, by);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(bx + bw - len, by); ctx.lineTo(bx + bw, by); ctx.lineTo(bx + bw, by + len);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(bx, by + bh - len); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + len, by + bh);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(bx + bw - len, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by + bh - len);
                ctx.stroke();

                ctx.fillStyle = box.color + '0a';
                ctx.fillRect(bx, by, bw, bh);

                ctx.fillStyle = box.color;
                ctx.font = '500 9px "Fira Code", monospace';
                const labelText = `${box.label} [${Math.floor(box.conf * 100)}%]`;
                ctx.fillText(labelText, bx + 2, by - 4);

                ctx.fillStyle = box.color;
                ctx.beginPath();
                ctx.arc(bx + bw / 2, by + bh / 2, 2, 0, 2 * Math.PI);
                ctx.fill();
            });

            frameCount++;
            if (frameCount % 15 === 0) {
                if (latencyVal) {
                    latencyVal.innerText = `${(Math.random() * 3.6 + 6.2).toFixed(1)}ms`;
                }
                if (detectedVal) {
                    detectedVal.innerText = Math.floor(Math.random() * 12 + 120);
                }
                if (fpsVal) {
                    fpsVal.innerText = `${(Math.random() * 0.8 + 59.6).toFixed(1)}`;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            if (img) {
                img.removeEventListener('load', resizeCanvas);
            }
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="telemetry-canvas" />
    );
};

export default TelemetryCanvas;

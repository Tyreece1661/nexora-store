const ProductImageGenerator = {
    generateImage(product, width = 600, height = 600) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        const colors = this.getColorsForCategory(product.category);

        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, width, height);

        this.drawBackgroundPattern(ctx, width, height, colors);

        this.drawProductIcon(ctx, product.category, width / 2, height / 2 - 40, colors);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.wrapText(ctx, product.name, width / 2, height / 2 + 80, width - 80, 30);

        ctx.fillStyle = colors.gold;
        ctx.font = '600 16px Inter, sans-serif';
        ctx.fillText(product.category, width / 2, height / 2 + 130);

        ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
        ctx.fillRect(width / 2 - 40, height / 2 + 150, 80, 2);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '500 12px Inter, sans-serif';
        ctx.fillText('Nexora', width / 2, height - 30);

        this.drawCornerAccent(ctx, width, height, colors.gold);

        return canvas.toDataURL('image/jpeg', 0.9);
    },

    getColorsForCategory(category) {
        const schemes = {
            'AI Cameras': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'AI Recorders': { bg: '#0F0F0F', gold: '#D4AF37', accent: '#1A1A1A' },
            'AI Microphones': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'AR/AI Glasses': { bg: '#0D0D0D', gold: '#D4AF37', accent: '#1A1A1A' },
            'Portable Displays': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'Wireless Conferencing': { bg: '#0F0F0F', gold: '#D4AF37', accent: '#1A1A1A' },
            'Digital Signage': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'Smart Displays': { bg: '#0D0D0D', gold: '#D4AF37', accent: '#1A1A1A' },
            'E-Ink Tablets': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'Photography Drones': { bg: '#0F0F0F', gold: '#D4AF37', accent: '#1A1A1A' },
            '360/3D Cameras': { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' },
            'Power Stations': { bg: '#0D0D0D', gold: '#D4AF37', accent: '#1A1A1A' },
        };
        return schemes[category] || { bg: '#0A0A0A', gold: '#D4AF37', accent: '#1A1A1A' };
    },

    drawBackgroundPattern(ctx, width, height, colors) {
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)';
        ctx.lineWidth = 1;
        for (let i = 0; i < width; i += 30) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }
        for (let i = 0; i < height; i += 30) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }

        const gradient = ctx.createRadialGradient(width / 2, height / 2 - 40, 0, width / 2, height / 2 - 40, 200);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    },

    drawProductIcon(ctx, category, x, y, colors) {
        ctx.save();
        ctx.translate(x, y);

        ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
        ctx.shadowBlur = 40;

        switch (category) {
            case 'AI Cameras':
                this.drawCameraIcon(ctx, colors.gold);
                break;
            case 'AI Recorders':
                this.drawRecorderIcon(ctx, colors.gold);
                break;
            case 'AI Microphones':
                this.drawMicIcon(ctx, colors.gold);
                break;
            case 'AR/AI Glasses':
                this.drawGlassesIcon(ctx, colors.gold);
                break;
            case 'Portable Displays':
                this.drawDisplayIcon(ctx, colors.gold);
                break;
            case 'Wireless Conferencing':
                this.drawWirelessIcon(ctx, colors.gold);
                break;
            case 'Digital Signage':
                this.drawSignageIcon(ctx, colors.gold);
                break;
            case 'Smart Displays':
                this.drawSmartDisplayIcon(ctx, colors.gold);
                break;
            case 'E-Ink Tablets':
                this.drawTabletIcon(ctx, colors.gold);
                break;
            case 'Photography Drones':
                this.drawDroneIcon(ctx, colors.gold);
                break;
            case '360/3D Cameras':
                this.draw360Icon(ctx, colors.gold);
                break;
            case 'Power Stations':
                this.drawPowerIcon(ctx, colors.gold);
                break;
            default:
                this.drawDefaultIcon(ctx, colors.gold);
        }

        ctx.restore();
    },

    drawCameraIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-40, -25, 80, 50, 8);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
    },

    drawRecorderIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-30, -35, 60, 70, 12);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.arc(0, -10, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, -10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.fillRect(-8, 10, 16, 3);
        ctx.fillRect(-12, 18, 24, 3);
    },

    drawMicIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-15, -40, 30, 50, 15);
        ctx.fill();
        ctx.strokeStyle = gold;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 10, 20, 0, Math.PI, false);
        ctx.stroke();
        ctx.fillStyle = gold;
        ctx.fillRect(-2, 10, 4, 25);
        ctx.fillRect(-10, 30, 20, 5);
    },

    drawGlassesIcon(ctx, gold) {
        ctx.strokeStyle = gold;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(-45, -15, 35, 30, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.roundRect(10, -15, 35, 30, 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-10, 0);
        ctx.lineTo(10, 0);
        ctx.stroke();
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.beginPath();
        ctx.roundRect(-43, -13, 31, 26, 6);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(12, -13, 31, 26, 6);
        ctx.fill();
    },

    drawDisplayIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-45, -30, 90, 60, 6);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.fillRect(-40, -25, 80, 50);
        ctx.fillStyle = gold;
        ctx.fillRect(-5, 30, 10, 10);
        ctx.fillRect(-15, 38, 30, 4);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.fillRect(-35, -20, 70, 40);
    },

    drawWirelessIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-35, -20, 70, 40, 8);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.arc(-15, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(15, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(-15, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(15, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
        ctx.lineWidth = 2;
        for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(0, 0, 25 + i * 12, -0.5, 0.5);
            ctx.stroke();
        }
    },

    drawSignageIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-35, -40, 70, 65, 6);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.fillRect(-30, -35, 60, 55);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.fillRect(-25, -30, 50, 45);
        ctx.fillStyle = gold;
        ctx.fillRect(-2, 25, 4, 20);
        ctx.fillRect(-12, 42, 24, 4);
    },

    drawSmartDisplayIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-50, -35, 100, 70, 8);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.fillRect(-45, -30, 90, 60);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.fillRect(-40, -25, 80, 50);
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
    },

    drawTabletIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-30, -40, 60, 80, 8);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.fillRect(-25, -35, 50, 70);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.fillRect(-20, -28, 40, 55);
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, -38, 3, 0, Math.PI * 2);
        ctx.fill();
    },

    drawDroneIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-20, -10, 40, 20, 4);
        ctx.fill();
        ctx.strokeStyle = gold;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(-35, -20, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(35, -20, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(-35, 20, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(35, 20, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
        ctx.beginPath();
        ctx.arc(-35, -20, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(35, -20, 16, 0, Math.PI * 2);
        ctx.fill();
    },

    draw360Icon(ctx, gold) {
        ctx.strokeStyle = gold;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(0, 0, 30, 12, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(0, 0, 12, 30, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fill();
    },

    drawPowerIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.roundRect(-25, -35, 50, 70, 8);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.beginPath();
        ctx.moveTo(0, -20);
        ctx.lineTo(8, -5);
        ctx.lineTo(2, -5);
        ctx.lineTo(5, 20);
        ctx.lineTo(-8, 5);
        ctx.lineTo(-2, 5);
        ctx.closePath();
        ctx.fill();
    },

    drawDefaultIcon(ctx, gold) {
        ctx.fillStyle = gold;
        ctx.beginPath();
        ctx.arc(0, 0, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0A0A0A';
        ctx.font = 'bold 28px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('AI', 0, 0);
    },

    drawCornerAccent(ctx, width, height, gold) {
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(0, 0);
        ctx.lineTo(40, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width - 40, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, 40);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, height - 40);
        ctx.lineTo(0, height);
        ctx.lineTo(40, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width - 40, height);
        ctx.lineTo(width, height);
        ctx.lineTo(width, height - 40);
        ctx.stroke();
    },

    wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let lines = [];

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lines.push(line.trim());
                line = words[n] + ' ';
            } else {
                line = testLine;
            }
        }
        lines.push(line.trim());

        const startY = y - ((lines.length - 1) * lineHeight) / 2;
        lines.forEach((l, i) => {
            ctx.fillText(l, x, startY + i * lineHeight);
        });
    }
};

if (typeof window !== 'undefined') {
    window.ProductImageGenerator = ProductImageGenerator;
}

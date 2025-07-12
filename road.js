class Road {
    constructor(x, width, laneCount = 2) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        this.top = 100000;
        this.bottom = -100000;

        const topLeft = { x: this.left, y: this.top };
        const topRight = { x: this.right, y: this.top };
        const bottomLeft = { x: this.left, y: this.bottom };
        const bottomRight = { x: this.right, y: this.bottom };

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width / this.laneCount;
        return this.left + laneWidth / 2 + 
            Math.min(laneIndex, this.laneCount - 1) * laneWidth;
    }

    draw(ctx) {
        // ✅ draw road background as black
        ctx.fillStyle = "#1E1E1E";
        ctx.fillRect(this.left, -100000, this.width, 200000);

        // ✅ draw red-white curb at the top
        this.drawCurb(ctx);

        // draw dashed lane lines
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        for (let i = 1; i < this.laneCount; i++) {
            const x = lerp(this.left, this.right, i / this.laneCount);

            ctx.setLineDash([20, 20]);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        // draw borders
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }

    drawCurb(ctx) {
        const curbHeight = 30;
        const segmentWidth = 40;
        for (let i = 0; i < (this.right - this.left) / segmentWidth; i++) {
            ctx.fillStyle = i % 2 === 0 ? "red" : "white";
            ctx.fillRect(this.left + i * segmentWidth, -curbHeight, segmentWidth, curbHeight);
        }
    }
}

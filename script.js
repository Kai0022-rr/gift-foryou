setInterval(() => {
                const el = document.createElement('div');
                el.className = 'floating';
                
                // Tambahkan balon 🎈 dan variasi lainnya
                const items = ['🌸', '💖', '✨', '🧸', '🎈', '🎈', '🧸', '🎀'];
                el.innerHTML = items[Math.floor(Math.random() * items.length)];
                
                // Posisi acak
                el.style.left = Math.random() * 100 + 'vw';
                el.style.top = '105vh';
                
                // Ukuran acak untuk kedalaman 3D
                const size = Math.random() * 20 + 25;
                el.style.fontSize = size + 'px';
                
                // Kecepatan animasi acak supaya tidak barengan
                el.style.animationDuration = (Math.random() * 2 + 4) + 's';
                
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 5000);
            }, 250);

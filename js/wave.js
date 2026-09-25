(function(){
  "use strict";

  // ---------- gently animated wave background ----------
  (function waveBg(){
    var c = document.getElementById('waveBg');
    var ctx = c.getContext('2d');
    var t = 0;
    var bands = [
      { amp:10, len:340, speed:0.006, y:0.30, color:'rgba(255,255,255,.03)' },
      { amp:14, len:420, speed:-0.004, y:0.48, color:'rgba(79,184,171,.045)' },
      { amp:9,  len:260, speed:0.008, y:0.66, color:'rgba(255,255,255,.025)' },
      { amp:16, len:500, speed:-0.003, y:0.82, color:'rgba(143,127,214,.04)' }
    ];
    function size(){
      c.width = innerWidth * Math.min(devicePixelRatio,2);
      c.height = innerHeight * Math.min(devicePixelRatio,2);
    }
    function draw(){
      t += 1;
      var w = c.width, h = c.height;
      var g = ctx.createLinearGradient(0,0,0,h);
      g.addColorStop(0,'#191d23');
      g.addColorStop(1,'#12151a');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      bands.forEach(function(b){
        ctx.beginPath();
        var baseY = h*b.y;
        ctx.moveTo(0, baseY);
        for(var x=0;x<=w;x+=8){
          var y = baseY + Math.sin(x/b.len + t*b.speed)*b.amp*(devicePixelRatio||1);
          ctx.lineTo(x,y);
        }
        ctx.lineTo(w,h); ctx.lineTo(0,h);
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }
    window.addEventListener('resize', size);
    size();
    draw();
  })();
})();

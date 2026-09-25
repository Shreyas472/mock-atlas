(function(){
  "use strict";

  var DOMAINS = [
    { id:'intelligent-systems',   name:'Intelligent Systems',   tag:'Machine Learning & RL' },
    { id:'computer-architecture', name:'Computer Architecture', tag:'VLSI · CHIP Design' },
    { id:'robotics',              name:'Robotics',              tag:'ROS2 & Automation' },
    { id:'embedded-systems',      name:'Embedded Systems',      tag:'Firmware & IoT' },
    { id:'cad-cam',               name:'CAD / CAM',             tag:'Design & Manufacturing' },
    { id:'pcb-design',            name:'PCB Designing',         tag:'Circuits & Fabrication' }
  ];

  var railLeft = document.getElementById('railLeft');
  var railRight = document.getElementById('railRight');

  DOMAINS.forEach(function(d, i){
    var card = document.createElement('a');
    card.className = 'domain-card';
    card.href = 'domains/' + d.id + '.html';
    card.innerHTML = '<span class="d-name">'+d.name+'</span><span class="d-tag">'+d.tag+'</span>';
    (i < 3 ? railLeft : railRight).appendChild(card);
  });
})();

'use strict'
'use strict'


function addLoadEvent(func) : void {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      }
    }
}

addLoadEvent(cargarElementos);
addLoadEvent(cargarParticulas);
  
function cargarElementos() : void {
    const seccion    = document.querySelectorAll('.section')
    const header     = document.querySelector('.header')
    const particulas = document.querySelector('#particles-js')
    
    for (const cadaSection of seccion) {
        let clase = cadaSection.dataset.class
        cambiarFondo( clase )
    }
    function cambiarFondo( x ){
        let container = '.section--' + x;
        let bodyCont  = 'body--' + x;
        
        let elemento  = document.querySelector(container).offsetTop
        let altura    = document.querySelector(container).clientHeight
        let imagen    = document.querySelector(container + '.section--scroll .section__image');
       
        window.addEventListener('resize', () =>{
            elemento  = document.querySelector(container).offsetTop
            altura    = document.querySelector(container).clientHeight
            imagen    = document.querySelector(container + '.section--scroll .section__image');    
        })
        window.addEventListener('scroll',() => {    
            
            let pixel  = window.pageYOffset 
            let limite = ( elemento - (altura / 6) )
            console.log({ elemento , altura })
            if( pixel >= limite ){
                document.body.classList.add(bodyCont)
                if( imagen !== null ){ imagen.style.transform = 'translateY(-'+( (pixel - limite) / 2 )+'px) scale(1.1)' }
                if( x == 'neptuno'){
                    header.classList.add('header--neptuno')
                    particulas.classList.add('invert')
                }else{
                    header.classList.remove('header--neptuno')
                    particulas.classList.remove('invert')
                }
            }else{
                document.body.classList.remove(bodyCont)
            }
    
            
        })
    }
}
function cargarParticulas(){
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 101,
            "density": {
              "enable": true,
              "value_area": 1499.3805191013182
            }
          },
          "color": {
            "value": "#FFFFFF"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 240.25948023865772,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    ); 
}

import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim';

function Particless  (){
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
        { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
}
</>

)










    // return (
    //     <>
    //     { init &&  <Particles
    //   width="100%" height="100vh"
    //   params={{
    //     "particles": {
    //         "number": {
    //             "value": 100,
    //             "density": {
    //                 "enable": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": true,
    //                       "anim": {
    //             "enable": false,
    //             "speed": 60,
    //             "size_min": 0.7,
    //             "sync": false
    //           }
    //         },
    //         "color": {
    //                   "value": "#a4acc4"
    //                 },
    //         "move": {
    //             "direction": "none",
    //             "out_mode": "out"
    //         },
    //         "line_linked": {
    //             "enable": false
    //         }
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onclick": {
    //                 "enable": false,
    //                 "mode": "remove"
    //             }
    //         },
    //         "modes": {
    //             "remove": {
    //                 "particles_nb": 10
    //             }
    //         }
    //     }
    // }}
    //   // params={{
        
    //   //     "particles": {
    //   //       "number": {
    //   //         "value": 80,
    //   //         "density": {
    //   //           "enable": true,
    //   //           "value_area": 800
    //   //         }
    //   //       },
    //   //       "color": {
    //   //         "value": "#2e344e"
    //   //       },
    //   //       "shape": {
    //   //         "type": "circle",
    //   //         "stroke": {
    //   //           "width": 0,
    //   //           "color": "#000000"
    //   //         },
    //   //         "polygon": {
    //   //           "nb_sides": 5
    //   //         },
    //   //         "image": {
    //   //           "src": "img/github.svg",
    //   //           "width": 100,
    //   //           "height": 100
    //   //         }
    //   //       },
    //   //       "opacity": {
    //   //         "value": 0.5,
    //   //         "random": false,
    //   //         "anim": {
    //   //           "enable": false,
    //   //           "speed": 10,
    //   //           "opacity_min": 0.1,
    //   //           "sync": false
    //   //         }
    //   //       },
    //   //       "size": {
    //   //         "value": 3,
    //   //         "random": true,
    //   //         "anim": {
    //   //           "enable": false,
    //   //           "speed": 60,
    //   //           "size_min": 0.7,
    //   //           "sync": false
    //   //         }
    //   //       },
    //   //       "line_linked": {
    //   //         "enable": true,
    //   //         "distance": 150,
    //   //         "color": "#2e344e",
    //   //         "opacity": 0.6,
    //   //         "width": 1
    //   //       },
    //   //       "move": {
    //   //         "enable": true,
    //   //         "speed": 1.5,
    //   //         "direction": "none",
    //   //         "random": true,
    //   //         "straight": false,
    //   //         "out_mode": "out",
    //   //         "bounce": false,
    //   //         "attract": {
    //   //           "enable": false,
    //   //           "rotateX": 600,
    //   //           "rotateY": 1200
    //   //         }
    //   //       }
    //   //     },
    //   //     "interactivity": {
    //   //       "detect_on": "canvas",
    //   //       "events": {
    //   //         "onhover": {
    //   //           "enable": false,
    //   //           "mode": "bubble"
    //   //         },
    //   //         "onclick": {
    //   //           "enable": false,
    //   //           "mode": "push"
    //   //         },
    //   //         "resize": true
    //   //       },
    //   //       "modes": {
    //   //         "grab": {
    //   //           "distance": 400,
    //   //           "line_linked": {
    //   //             "opacity": 1
    //   //           }
    //   //         },
    //   //         "bubble": {
    //   //           "distance": 400,
    //   //           "size": 40,
    //   //           "duration": 2,
    //   //           "opacity": 8,
    //   //           "speed": 3
    //   //         },
    //   //         "repulse": {
    //   //           "distance": 200,
    //   //           "duration": 0.4
    //   //         },
    //   //         "push": {
    //   //           "particles_nb": 4
    //   //         },
    //   //         "remove": {
    //   //           "particles_nb": 2
    //   //         }
    //   //       }
    //   //     },
    //   //     "retina_detect": true
        
    //   // }}
    // />}
    //     </>

    // )
}

export default Particless

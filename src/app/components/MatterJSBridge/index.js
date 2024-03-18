"use client";

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Composite, Runner, Composites, MouseConstraint, Mouse, Body, Constraint } from 'matter-js';
// styles
import styles from './MatterJSBridge.module.css'

const THICCNESS = 60;
const RATIO = 0.11;

const MatterJSBridge = () => {

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;

    const standardPixel = 300;
    const scaleFactor = (canvasWidth * RATIO) / standardPixel;

    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    
    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
    }
    });

    // Create the space
    const ground = Bodies.rectangle(canvasWidth / 2, canvasHeight + THICCNESS / 2, 27184, THICCNESS, { 
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    });
    const leftWall = Bodies.rectangle(0 - THICCNESS / 2, canvasHeight / 2, THICCNESS, canvasHeight * 5, { 
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    });
    const rightWall = Bodies.rectangle(canvasWidth + THICCNESS / 2, canvasHeight / 2, THICCNESS, canvasHeight * 5, { 
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    });

    const group = Body.nextGroup(true);

    const bridge = Composites.stack(100, 100, 9, 1, 0, 1, function(x, y) {
      return Bodies.rectangle(x - 10, y, canvasWidth - ((canvasWidth * (RATIO * 2)) * 3), 40, { 
          collisionFilter: { group: group },
          chamfer: 7,
          density: 0.2,
          frictionAir: 0.3,
          render: {
            sprite: {
              texture: 'bridge-chain.png',
              xScale: scaleFactor / 1.5,
              yScale: scaleFactor / 1.5,
            }
          }
      });
    });

    Composites.chain(bridge, 0.1, 0, -0.1, 0, { 
      stiffness: 0.9,
      length: 2,
      render: {
          visible: false,
          fillStyle: '#FFD8DF'
      }
    });

    const leftBridgePost = Bodies.rectangle( 0 + (canvasWidth * RATIO / 2), canvasHeight - (canvasHeight * RATIO), canvasWidth * (RATIO * 2.3), canvasHeight * (RATIO * 3.3), { 
      isStatic: true,
      render: {
        sprite: {
          texture: 'wall.png',
          xScale: scaleFactor,
          yScale: scaleFactor,
        }
      }
    });

    const rightBridgePost = Bodies.rectangle( canvasWidth - (canvasWidth * RATIO / 2), canvasHeight - (canvasHeight * RATIO), canvasWidth * (RATIO * 2.3), canvasHeight * (RATIO * 3.3), { 
      isStatic: true,
      render: {
        sprite: {
          texture: 'wall.png',
          xScale: scaleFactor,
          yScale: scaleFactor,
        }
      }
    });

    const mainCircle = Bodies.rectangle(canvasWidth / 2, 50, scaleFactor * 290, scaleFactor * 290, {
      render: {
        sprite: {
          texture: 'main-circle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftBottomStar = Bodies.rectangle((canvasWidth / 2) - 160, 50, scaleFactor * 120, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'star.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftSadieLee = Bodies.rectangle((canvasWidth / 2) - 90, 50 - 10, scaleFactor * 400, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'sadie-lee.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftTopRectangle = Bodies.rectangle((canvasWidth / 2) - 100, 80 - 20, scaleFactor * 140, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'rectangle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftBottomRectangle = Bodies.rectangle((canvasWidth / 2) - 130, 50 - 30, scaleFactor * 140, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'rectangle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftBottomBigCircle = Bodies.circle((canvasWidth / 2) - 150, 50 - 20, scaleFactor * 100, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    });

    const leftTopBigCircle = Bodies.circle((canvasWidth / 2) - 150, 50 - 20, scaleFactor * 100, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    })

    const leftEndRectangle = Bodies.rectangle((canvasWidth / 2) - 200, 50, scaleFactor * 80, scaleFactor * 80, {
      render: {
        sprite: {
          texture: 'rectangle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const centerBigCircle = Bodies.rectangle(canvasWidth / 2, 50 - 20, scaleFactor * 210, scaleFactor * 210, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    })

    const graphicDesigner = Bodies.rectangle((canvasWidth / 2) - 80, 50 - 40, scaleFactor * 400, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'graphic-designer.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightSmallCircleStack = Composites.stack((canvasWidth / 2) + 100, 50, 2, 2, 0, 0, function(x, y) {

      return Bodies.rectangle(x, y, scaleFactor * 100, scaleFactor * 100, {
        render: {
        sprite: {
          texture: 'small-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
          }
        }
      })
    });

    const rightTopStar = Bodies.rectangle((canvasWidth / 2) + 80, 50 - 40, scaleFactor * 130, scaleFactor * 130, {
      render: {
        sprite: {
          texture: 'star.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightBottomStar = Bodies.rectangle((canvasWidth / 2) + 100, 50 - 40, scaleFactor * 130, scaleFactor * 130, {
      render: {
        sprite: {
          texture: 'star.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightFlower = Bodies.rectangle((canvasWidth / 2) + 250, 50, scaleFactor * 150, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'flower.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })
    
    const rightSadieLee = Bodies.rectangle((canvasWidth / 2) + 260, 80 - 10, scaleFactor * 400, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'sadie-lee.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightBigCircle = Bodies.circle((canvasWidth / 2) + 250, 50 - 30, scaleFactor * 100, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    })

    const rightEndBottomFlower = Bodies.rectangle((canvasWidth / 2) + 390, 50, scaleFactor * 150, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'flower.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightEndTopFlower = Bodies.rectangle((canvasWidth / 2) + 380, 50 - 10, scaleFactor * 150, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'flower.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    

    World.add(engine.world, [ground, leftWall, rightWall, bridge, leftBridgePost, rightBridgePost, mainCircle, leftBottomStar, leftSadieLee, leftBottomBigCircle, leftTopBigCircle, leftEndRectangle, leftTopRectangle, leftBottomRectangle, graphicDesigner, centerBigCircle, rightSmallCircleStack, rightTopStar, rightBottomStar, rightSadieLee, rightBigCircle, rightFlower, rightEndBottomFlower, rightEndTopFlower,
      Constraint.create({ 
          pointA: { x: 0 + ((canvasWidth * RATIO / 2) * 2.4), y: canvasHeight - ((canvasHeight * RATIO) * 2.9) }, 
          bodyB: bridge.bodies[0], 
          pointB: { x: -50, y: 0 },
          length: 5,
          stiffness: 0.9,
          render: {
            strokeStyle: '#FF4567'
          }
      }),
      Constraint.create({ 
          pointA: { x: canvasWidth - ((canvasWidth * RATIO / 2) * 2.4), y: canvasHeight - ((canvasHeight * RATIO * 2.9)) }, 
          bodyB: bridge.bodies[bridge.bodies.length - 1], 
          pointB: { x: 50, y: 0 },
          length: 5,
          stiffness: 0.9,
          render: {
            strokeStyle: '#FF4567'
          }
      })
    ]);

    Runner.run(engine);
    Render.run(render);

    // Add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.1,
          render: {
            visible: false
          }
        }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // const handleResize = () => {
    //   render.canvas.width = boxRef.current.clientWidth;
    //   render.canvas.height = boxRef.current.clientHeight;
    //   render.bounds.max.x = window.innerWidth;
    //   render.bounds.max.y = window.innerHeight;
    //   render.options.width = window.innerWidth;
    //   render.options.height = window.innerHeight;

    //   Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    //   Matter.Body.setPosition(ground, Matter.Vector.create(boxRef.current.clientWidth / 2, boxRef.current.clientHeight + THICCNESS / 2));
    //   Matter.Body.setPosition(rightWall, Matter.Vector.create(boxRef.current.clientWidth + THICCNESS / 2, boxRef.current.clientHeight / 2));
    //   Matter.Body.setPosition(leftBridgePost, Matter.Vector.create(0 + (boxRef.current.clientWidth * RATIO), boxRef.current.clientHeight - (boxRef.current.clientHeight * RATIO)));
    //   Matter.Body.setPosition(rightBridgePost, Matter.Vector.create(boxRef.current.clientWidth - (boxRef.current.clientWidth * RATIO), boxRef.current.clientHeight - (boxRef.current.clientHeight * RATIO)));
    //   Matter.Body.setPosition(bridge.bodies[0], Matter.Vector.create(0 + (boxRef.current.clientWidth * RATIO), 100));
    //   Matter.Body.setPosition(bridge.bodies[bridge.bodies.length - 1], Matter.Vector.create(boxRef.current.clientWidth - (boxRef.current.clientWidth * RATIO), 100));

    // }
    // window.addEventListener('resize', handleResize);

    return () => {
      Runner.stop(engine);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      // window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div 
      ref={boxRef}
      className={styles.canvasContainer}
    >
      <canvas 
        ref={canvasRef} 
        className={styles.canvas}
      />
    </div>

  )
};

export default MatterJSBridge;
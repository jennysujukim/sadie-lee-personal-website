"use client";

import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Composite, Runner, Composites, MouseConstraint, Mouse, Body, Constraint } from 'matter-js';
// styles
import styles from './MatterJSBridgeMobile.module.css'

const MatterJSBridgeMobile = ({ ratio }) => {

  const THICCNESS = 60;

  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [ RATIO, setRATIO ] = useState(0.2);

  useEffect(() => {

    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;
    setRATIO(ratio);

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

    const bridge = Composites.stack(100, 100, 5, 1, 0, 1, function(x, y) {
      return Bodies.rectangle(x - 10, y, canvasWidth - ((canvasWidth * (RATIO)) * 2), 20, { 
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
      stiffness: 1.5,
      length: 2,
      render: {
          visible: false,
          fillStyle: '#FFD8DF'
      }
    });

    const mainCircle = Bodies.circle(canvasWidth / 2, 50, scaleFactor * 140, {
      render: {
        sprite: {
          texture: 'main-circle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    });

    const leftSmallCircleStack = Composites.stack((canvasWidth / 2) - 120, 0, 2, 2, 0, 0, function(x, y) {

      return Bodies.rectangle(x, y, scaleFactor * 120, scaleFactor * 120, {
        render: {
        sprite: {
          texture: 'small-circle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
          }
        }
      })
    });

    const leftLeftStar = Bodies.rectangle((canvasWidth / 2) - 100, 80 - 80, scaleFactor * 130, scaleFactor * 130, {
      render: {
        sprite: {
          texture: 'star.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftRightStar = Bodies.rectangle((canvasWidth / 2) - 70, 80 - 80, scaleFactor * 130, scaleFactor * 130, {
      render: {
        sprite: {
          texture: 'star.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const sadieLee = Bodies.rectangle((canvasWidth / 2) - 100, 80 - 150, scaleFactor * 420, scaleFactor * 130, {
      render: {
        sprite: {
          texture: 'sadie-lee.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const leftBigCircle = Bodies.circle((canvasWidth / 2), 80 - 120, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    })

    const rightBigCircle = Bodies.circle((canvasWidth / 2) + 40, 80 - 120, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'big-circle.png',
          xScale: scaleFactor / 1.3,
          yScale: scaleFactor / 1.3,
        }
      }
    })

    const rightBottomFlower = Bodies.rectangle((canvasWidth / 2) + 70, 80, scaleFactor * 150, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'flower.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightBottomRectangle = Bodies.rectangle((canvasWidth / 2) + 70, 80 - 50, scaleFactor * 140, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'rectangle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightTopFlower = Bodies.rectangle((canvasWidth / 2) + 100, 80, scaleFactor * 150, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'flower.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const rightTopRectangle = Bodies.rectangle((canvasWidth / 2) + 100, 80 - 50, scaleFactor * 140, scaleFactor * 120, {
      render: {
        sprite: {
          texture: 'rectangle.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

    const graphicDesigner = Bodies.rectangle((canvasWidth / 2) + 50, 80 - 150, scaleFactor * 450, scaleFactor * 150, {
      render: {
        sprite: {
          texture: 'graphic-designer.png',
          xScale: scaleFactor / 1.2,
          yScale: scaleFactor / 1.2,
        }
      }
    })

      World.add(engine.world, [ground, leftWall, rightWall, bridge, mainCircle, leftSmallCircleStack, leftLeftStar, leftRightStar, sadieLee, leftBigCircle, rightBigCircle, rightBottomFlower, rightBottomRectangle, rightTopFlower, rightTopRectangle, graphicDesigner,
        Constraint.create({ 
            pointA: { x: 5, y: canvasHeight - ((canvasHeight * RATIO) * 1.8) }, 
            bodyB: bridge.bodies[0], 
            pointB: { x: -50, y: 0 },
            length: 10,
            stiffness: 1,
            render: {
              strokeStyle: '#FF4567'
            }
        }),
        Constraint.create({ 
            pointA: { x: canvasWidth - 5, y: canvasHeight - ((canvasHeight * RATIO * 1.8)) }, 
            bodyB: bridge.bodies[bridge.bodies.length - 1], 
            pointB: { x: 50, y: 0 },
            length: 10,
            stiffness: 1,
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

    return () => {
      Runner.stop(engine);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
    };

  }, [RATIO, setRATIO, ratio]);

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

export default MatterJSBridgeMobile;
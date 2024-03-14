"use client";

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Composite, Runner, Composites, MouseConstraint, Body, Bodies, Common, Constraint, Mouse } from 'matter-js';
// styles
import styles from './MatterJSBridge.module.css'

const THICCNESS = 20;

const MatterJSBridge = () => {

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvasWidth = canvasRef.current.clientWidth;
    const canvasHeight = canvasRef.current.clientHeight;

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
        // showAngleIndicator: true,
    }
    });

    const group = Body.nextGroup(true);

    const bridge = Composites.stack(160, 290, 8, 1, 0, 0, function(x, y) {
      return Bodies.rectangle(x - 10, y, 300, 20, { 
          collisionFilter: { group: group },
          chamfer: 5,
          density: 0.1,
          frictionAir: 0.2,
          render: {
            sprite: {
              texture: 'bridge-chain.png',
              xScale: 0.5,
              yScale: 0.3,
            }
          }
      });
    });

    Composites.chain(bridge, 0.1, 0, -0.1, 0, { 
      stiffness: 0.6,
      length: 2,
      render: {
          visible: false,
          fillStyle: '#FFD8DF'
      }
    });

    const stack = Composites.stack(canvasWidth / 2, 0, 4, 3, 0, 0, function(x, y) {
      return Bodies.rectangle(x, y, 50, 50, {
        render: {
          sprite: {
            texture: 'hero-star.png',
            xScale: 0.5,
            yScale: 0.5,
          
          }
        }
      });
    });

    const leftWall = Bodies.rectangle(0 + (THICCNESS * 2), canvasHeight - ((THICCNESS * 2) * 2), THICCNESS, THICCNESS * 2, { 
      isStatic: true,
      render: {
        sprite: {
          texture: 'wall.png',
          xScale: 0.5,
          yScale: 0.5,
        }
      }
    });

    const rightWall = Bodies.rectangle(canvasWidth - (THICCNESS * 2), canvasHeight - ((THICCNESS * 2) * 2), THICCNESS, THICCNESS * 2, {
      isStatic: true,
      render: {
        sprite: {
          texture: 'wall.png',
          xScale: 0.5,
          yScale: 0.5,
        }
      }
    })

    World.add(engine.world, [bridge, stack, leftWall, rightWall,
      Constraint.create({ 
          pointA: { x: 0 + 150, y: canvasHeight - ((THICCNESS * 2) * 6) }, 
          bodyB: bridge.bodies[0], 
          pointB: { x: -25, y: 0 },
          length: 15,
          stiffness: 0.9,
          render: {
            strokeStyle: '#FF4567'
          }
      }),
      Constraint.create({ 
          pointA: { x: canvasWidth - 150, y: canvasHeight - ((THICCNESS * 2) * 6) }, 
          bodyB: bridge.bodies[bridge.bodies.length - 1], 
          pointB: { x: 25, y: 0 },
          length: 15,
          stiffness: 0.9,
          render: {
            strokeStyle: '#FF4567'
          }
      })
    ]);

    Matter.Runner.run(engine);
    Render.run(render);

    // add mouse control
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

    // Clean Up
    return () => {
      Runner.stop(engine);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
    };

  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas 
        ref={canvasRef} 
        className={styles.canvas}
      />
    </div>

  )
};

export default MatterJSBridge;
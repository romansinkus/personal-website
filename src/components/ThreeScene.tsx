"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef.current) {
      // Set up scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      // Add some lights to the scene
      const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light
      directionalLight.position.set(5, 5, 5); // Set light position
      scene.add(directionalLight);

      // Create a loader for GLTF models
      const loader = new GLTFLoader();
      
      // Load the model
      loader.load("/cube2.glb", (gltf) => {
        // If the model is loaded, add it to the scene
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Scale the model if necessary
        model.position.set(0, 0, 0); // Position the model in the scene
        scene.add(model);
      });

      // Set up camera position
      camera.position.z = 5;

      // Add Orbit Controls for easy navigation (optional)
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;

      // Create the animate function for rendering the scene
      const animate = () => {
        requestAnimationFrame(animate);

        // If the model is loaded, animate it
        if (scene.children.length > 0) {
          scene.children[0].rotation.x += 0.01;
          scene.children[0].rotation.y += 0.01;
        }

        controls.update(); // Update controls
        renderer.render(scene, camera);
      };

      animate();

      // Cleanup on component unmount
      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeScene;

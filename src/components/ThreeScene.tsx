
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup with anti-aliasing and alpha for transparency
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Improve performance on high DPI displays
    containerRef.current.appendChild(renderer.domElement);

    // Create geometric objects - enhanced with more variety and effects
    const objects: THREE.Mesh[] = [];
    
    // Create octahedrons with enhanced materials
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.OctahedronGeometry(Math.random() * 0.5 + 0.2, 0);
      
      // Create beautiful glowing materials
      const material = new THREE.MeshPhysicalMaterial({ 
        color: new THREE.Color(
          0.1 + Math.random() * 0.5, 
          0.3 + Math.random() * 0.5, 
          0.5 + Math.random() * 0.5
        ),
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        wireframe: Math.random() > 0.5,
        emissive: new THREE.Color(0x1F6FEB),
        emissiveIntensity: 0.2
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position randomly in a sphere with more controlled distribution
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      mesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
      mesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
      mesh.position.z = radius * Math.cos(theta);
      
      // Add random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store random rotation speeds
      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }
    
    // Create dodecahedrons (new shape!)
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.DodecahedronGeometry(Math.random() * 0.7 + 0.3, 0);
      
      // Use shiny glass-like material
      const material = new THREE.MeshPhysicalMaterial({ 
        color: new THREE.Color(0x58A6FF),
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        transmission: 0.9,
        opacity: 0.7,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position randomly in a sphere
      const radius = Math.random() * 12 + 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      mesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
      mesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
      mesh.position.z = radius * Math.cos(theta);
      
      // Add random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store random rotation speeds
      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.003
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }

    // Create torus knots (advanced shape!)
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.TorusKnotGeometry(
        Math.random() * 0.5 + 0.3, // radius
        Math.random() * 0.1 + 0.1, // tube
        64, // tubularSegments
        8, // radialSegments
        Math.floor(Math.random() * 3) + 1, // p
        Math.floor(Math.random() * 3) + 1  // q
      );
      
      // Create colorful material
      const material = new THREE.MeshPhysicalMaterial({ 
        color: new THREE.Color(
          Math.random() > 0.7 ? 0xF78166 : 0x238636
        ),
        metalness: 0.7,
        roughness: 0.2,
        wireframe: Math.random() > 0.7
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position further out
      const radius = Math.random() * 18 + 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      mesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
      mesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
      mesh.position.z = radius * Math.cos(theta);
      
      // Add random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      mesh.scale.set(0.7, 0.7, 0.7); // Make them smaller
      
      // Store random rotation speeds
      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.002,
        y: (Math.random() - 0.5) * 0.002,
        z: (Math.random() - 0.5) * 0.002
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }

    // Create particle system for small dots - enhanced with more particles and better visuals
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 1000; // Double the particles for more impressive effect
    const posArray = new Float32Array(particlesCnt * 3);
    const sizesArray = new Float32Array(particlesCnt);
    
    for (let i = 0; i < particlesCnt * 3; i += 3) {
      // Position particles in a spherical distribution
      const radius = (Math.random() * 0.5 + 0.5) * 25; // Between 12.5 and 25
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta); // x
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta); // y
      posArray[i+2] = radius * Math.cos(phi); // z
      
      // Vary particle sizes
      sizesArray[i/3] = Math.random() * 0.05 + 0.02;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));
    
    // Create shimmering particle material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      sizeAttenuation: true, // Make points smaller as they get further away
      color: 0x58A6FF,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending // Causes particles to add their light (creates glow effect)
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add subtle lighting for better 3D effect
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation function - enhanced with smooth movements
    const clock = new THREE.Clock();
    let previousTime = 0;
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;
      
      requestAnimationFrame(animate);
      
      // Rotate objects with more fluid motion
      objects.forEach((obj) => {
        if (obj && (obj as any).rotationSpeed) {
          obj.rotation.x += (obj as any).rotationSpeed.x;
          obj.rotation.y += (obj as any).rotationSpeed.y;
          obj.rotation.z += (obj as any).rotationSpeed.z;
          
          // Add slight floating motion
          obj.position.y += Math.sin(elapsedTime * 0.5 + obj.position.x) * 0.002;
        }
      });
      
      // Rotate and pulse particle system
      if (particlesMesh) {
        particlesMesh.rotation.y += deltaTime * 0.05;
        particlesMesh.rotation.x += deltaTime * 0.02;
        
        // Scale particles slightly to create "breathing" effect
        const scale = 1 + Math.sin(elapsedTime * 0.3) * 0.03;
        particlesMesh.scale.set(scale, scale, scale);
      }
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Handle mouse movement for interactive effect
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle camera movement for parallax effect
      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(scene.position);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    setIsInitialized(true);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      objects.forEach(obj => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(mat => mat.dispose());
        } else {
          obj.material.dispose();
        }
      });
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isInitialized]);

  return (
    <div>
      <div ref={containerRef} className="three-canvas" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-github-darker/10 to-github-darker/30 pointer-events-none z-[0]" />
    </div>
  );
};

export default ThreeScene;

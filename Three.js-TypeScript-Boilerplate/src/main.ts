import * as THREE from 'three';
// 1
import StatsPanel from 'three/addons/libs/stats.module.js';
// 2
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // alias -> 'three/addons/controls/OrbitControls.js'
// 3
import { GUI } from 'dat.gui';

import './style.css';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 1.5;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// add orbit controls interaction
// https://threejs.org/docs/#examples/en/controls/OrbitControls
new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// show FPS info
const stats = new StatsPanel();
document.body.appendChild(stats.dom);
stats.showPanel(0); // 0: fps, 1: ms, 2: memory

// add GUI
const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);

// gui.add(cube.scale, 'x', 0, 5);
// gui.add(cube.scale, 'y', 0, 5);
// gui.add(cube.scale, 'z', 0, 5);
// gui.add(cube.position, 'x', -5, 5);
// gui.add(cube.position, 'y', -5, 5);
// gui.add(cube.position, 'z', -5, 5);
// gui.add(cube.material, 'wireframe'); // toggle wireframe
// gui.add(cube.material, 'visible'); // toggle visibility

const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'x', -5, 5);
cameraFolder.add(camera.position, 'y', -5, 5);
cameraFolder.add(camera.position, 'z', 0, 25);

function animate() {
    requestAnimationFrame(animate);

    // stats.begin(); // Start measuring (for complex scenes)
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // stats.end(); // End measuring

    renderer.render(scene, camera);

    stats.update(); // Update the FPS counter
}

animate();

import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red', wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Size: for camera are and renderer size
const sizes = {
    width: 400,
    heigh: 400
}
// Camera
const camera = new THREE.PerspectiveCamera(150, sizes.width / sizes.heigh);
camera.position.z = 1;
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.heigh)
renderer.render(scene, camera)
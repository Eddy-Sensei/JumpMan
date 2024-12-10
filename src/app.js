import * as THREE from 'three';

//Background Colors
const texture = new THREE.TextureLoader()
const bgLoader = texture.load("/textures/bgcolor.png")
bgLoader.generateMipmaps = false
bgLoader.minFilter = THREE.NearestFilter

// Scene
const scene = new THREE.Scene()
scene.background = bgLoader

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


// Camera
const camera = new THREE.PerspectiveCamera(85, sizes.width / sizes.height,0.1 ,250)
camera.position.set(2, 2, 3)
camera.lookAt(new THREE.Vector3(0, 0, 0))
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Animate
function animate() {
    requestAnimationFrame(animate);
  
    renderer.render(scene, camera);
  }
  animate();

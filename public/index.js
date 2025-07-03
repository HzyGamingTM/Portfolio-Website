import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0x141414);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = "renderer-canvas";
document.querySelectorAll(".content-div")[0].prepend(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true}); 
const cube = new THREE.Mesh(geometry, material); 
scene.add(cube);

camera.position.set(0, 0, 3);

function animate() {
  renderer.render( scene, camera );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
}
renderer.setAnimationLoop(animate);


function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize, false );

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 85) {
      console.log(cube.material.color);
      cube.material.color.r += 0.1;
      while (cube.material.color.r >= 1) cube.material.color.r -= 0x000001;
    }
});
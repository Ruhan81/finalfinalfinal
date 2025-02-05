import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js"
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color:0x00ff00
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(window.innerWidth, window.innerHeight)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(camera)
}
animate()
import * as THREE from '../node_modules/three/build/three.module.js';
console.log(THREE);
function init() {
    const scene = new THREE.Scene(); //scene
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);//camera
    const renderer = new THREE.WebGLRenderer();//renderer

    renderer.setClearColor(new THREE.Color(0xeeeeee));//renderer background color white

    renderer.setSize(window.innerWidth, window.innerHeight);//renderer size window size

    let axes = new THREE.AxesHelper(20);
    scene.add(axes); //add axes

    const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1); //plane
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); //plane material
    const plane = new THREE.Mesh(planeGeometry, planeMaterial); //plane

    plane.rotation.x = -0.5*Math.PI;
    plane.position.set(15, 0, 0); //plane position
    scene.add(plane); //add plane

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);

    scene.add(cube);

    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);
    scene.add(sphere);

    camera.position.set(-30, 40, 30); //camera position
    camera.lookAt(scene.position); 

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    renderer.render(scene, camera);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    scene.add(spotLight);
}
window.onload = init;




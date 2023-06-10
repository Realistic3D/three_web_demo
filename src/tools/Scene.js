import * as THREE from "three";

export default class Scene {
    constructor(canvas) {
        // Create a scene
        this.scene = new THREE.Scene();

        // Create a camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Create a renderer
        this.renderer = new THREE.WebGLRenderer();

        this.setScene();
    }
    setScene() {
        this.camera.position.z = 5;
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    render() {
        requestAnimationFrame(this.render.bind(this));

        this.renderer.render(this.scene, this.camera);
    }
}

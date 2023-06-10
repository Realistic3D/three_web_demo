import Scene from "./src/tools/Scene";

async function Start() {
    const canvas = document.querySelector('canvas.webgl');
    console.log(canvas);
    const scene = new Scene(canvas);
}


Start().then();

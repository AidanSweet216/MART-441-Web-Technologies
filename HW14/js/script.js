var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2;
var modelObject;

function createBox() {
 
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(-100, -10, -10);
  scene.add(cube);
  cube.scale.x = 15; 
  cube.scale.y = 15; 
  cube.scale.z = 15; 


  animate();
}


function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  createBox2();
  renderer.render(scene, camera);

}



function createBox2() {
  
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x1234ee
  });
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.set(-2,5,5)
  cube.add(cube2);
  cube2.scale.x = 1; 
  cube2.scale.y = 1; 
  cube2.scale.z = 1; 

  animate2();
}


function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.05;
  cube2.rotation.y += 0.05;


}



function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0000000);
  return scene;
}



function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}

/**
 * Generate the light to be used in the scene. Light args:
 *   [0]: Hexadecimal color of the light
 *   [1]: Numeric value of the light's strength/intensity
 *   [2]: The distance from the light where the intensity is 0
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}



function getRenderer() {
  
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
 
  renderer.setPixelRatio(window.devicePixelRatio);
  
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Generate the controls to be used in the scene
 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}



function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/potion.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}
function loadModel2() {
    loader = new THREE.OBJLoader();
    loader.load('models/man.obj', function (object) {
      object.rotation.z = Math.PI;
      modelObject2 = object;
      modelObject2.position.set(5,0);
      modelObject2.scale.x = 5; 
      modelObject2.scale.y = 5; 
      modelObject2.scale.z = 5; 
      scene.add(object);
      animateModel();
    });
  }

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.025;
  modelObject.rotation.y += 0.025;
  modelObject2.rotation.y += 0.01;
  modelObject2.rotation.x += 0.01;
}




function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();


loadModel();
loadModel2();
render();
window.addEventListener('load', function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth -100, window.innerHeight - 100 );
  document.getElementById('world').appendChild(renderer.domElement);

  var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
  var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true} );
  var cylinder = new THREE.Mesh( geometry, material );
  scene.add( cylinder );
  camera.position.z = 20;

  function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
  }
  render();
});

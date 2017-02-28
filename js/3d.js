window.addEventListener('load', function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  camera.position.x = 200;
				camera.position.y = 100;
				camera.position.z = 200;

  renderer.setSize( window.innerWidth -100, window.innerHeight - 100 );
  document.getElementById('world').appendChild(renderer.domElement);

  var size = 500, step = 50;
				var geometry = new THREE.Geometry();
				for ( var i = - size; i <= size; i += step ) {
					geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
					geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
				}
				var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );
				var line = new THREE.LineSegments( geometry, material );
				scene.add( line );
  function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
  }
  render();

});

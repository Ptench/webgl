window.addEventListener('load', function () {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  camera.position.x = 0;
				camera.position.y = 200;
				camera.position.z = 500;

  renderer.setSize( window.innerWidth -100, window.innerHeight - 100 );
  document.getElementById('world').appendChild(renderer.domElement);

  var size = 300, step = 50;
				var geometry = new THREE.Geometry();
				for ( var i = - size; i <= size; i += step ) {
					geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
					geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
				}
				var material = new THREE.LineBasicMaterial( { color: 0xffffff} );
				var line = new THREE.LineSegments( geometry, material );
				scene.add( line );

        var geometry = new THREE.BoxGeometry( 50, 50, 50 );
				var materiall = new THREE.MeshLambertMaterial( { color: 0x62CB31, overdraw: 0.5 } );
				for ( var i = 0; i < 100; i ++ ) {
					var cube = new THREE.Mesh( geometry, materiall );
					cube.scale.y = Math.floor( Math.random() * 2 + 1 );
					cube.position.x = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;
					cube.position.y = ( cube.scale.y * 50 ) / 2;
					cube.position.z = Math.floor( ( Math.random() * 1000 - 500 ) / 50 ) * 50 + 25;
					scene.add( cube );
				}
        var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
      scene.add( ambientLight );
      var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
      directionalLight.position.x = Math.random() - 0.5;
      directionalLight.position.y = Math.random() - 0.5;
      directionalLight.position.z = Math.random() - 0.5;
      directionalLight.position.normalize();
      scene.add( directionalLight );
      var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
      directionalLight.position.x = Math.random() - 0.5;
      directionalLight.position.y = Math.random() - 0.5;
      directionalLight.position.z = Math.random() - 0.5;
      directionalLight.position.normalize();
      scene.add( directionalLight );

  function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
  }
  render();

});

import * as THREE from "three";

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function clickHandling(renderer, camera, videoTexture) {
  renderer.domElement.addEventListener(
    "click",
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, videoTexture);
    },
    false
  );
}

function onClick(camera, videoTexture) {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(videoTexture);

  if (intersects.length > 0) {
    const video = intersects[0].object;

    // Perform the desired action, e.g., open a modal or redirect to another page
    console.log("Clicked painting:", video.userData.info.title);
    window.open(video.userData.info.link, "_blank");
  }
}

export { clickHandling };

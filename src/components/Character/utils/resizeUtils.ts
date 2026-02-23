import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const rect = canvasDiv.current.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const isMobile = width < 1024;

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.aspect = width / height;

  if (isMobile) {
    camera.position.set(0, 13.1, 28);
    camera.zoom = 0.78;
  } else {
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
  }

  camera.updateProjectionMatrix();
  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}

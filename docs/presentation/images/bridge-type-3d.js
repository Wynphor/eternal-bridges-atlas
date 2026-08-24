/**
 * Bridge type models: grayscale architectural maquettes rendered with Three.js.
 * The scenes keep OrbitControls interaction while matching a neutral clay-model style.
 */
(function () {
  const MATERIALS = {
    stone: 0xa87442,
    lightStone: 0xd6b071,
    darkStone: 0x5b351d,
    shadowStone: 0x7a4d2a,
    cable: 0x3d2618,
    ground: 0xe8dcc8,
  };

  function clayMat(tone, roughness) {
    return new THREE.MeshStandardMaterial({
      color: tone,
      roughness: roughness == null ? 0.88 : roughness,
      metalness: 0.0,
      flatShading: true,
    });
  }

  function stoneMat() {
    return clayMat(MATERIALS.stone);
  }

  function lightStoneMat() {
    return clayMat(MATERIALS.lightStone, 0.92);
  }

  function darkStoneMat() {
    return clayMat(MATERIALS.darkStone, 0.9);
  }

  function cableMat() {
    return clayMat(MATERIALS.cable, 0.74);
  }

  function setShadow(obj) {
    obj.castShadow = true;
    obj.receiveShadow = true;
    return obj;
  }

  function box(width, height, depth, material, position, rotation) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    if (position) mesh.position.set(position[0], position[1], position[2]);
    if (rotation) mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
    return setShadow(mesh);
  }

  function cyl(radiusTop, radiusBottom, height, radialSegments, material, position, rotation) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments || 16),
      material
    );
    if (position) mesh.position.set(position[0], position[1], position[2]);
    if (rotation) mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
    return setShadow(mesh);
  }

  function yOnArch(x, crown, sag, halfSpan) {
    const t = Math.min(1, Math.abs(x) / halfSpan);
    return crown - sag * t * t;
  }

  function addPostPair(group, x, y, z, material, scale) {
    const postHeight = 0.95 * (scale || 1);
    [-z, z].forEach((side) => {
      group.add(cyl(0.075, 0.085, postHeight, 14, material, [x, y + postHeight / 2, side]));
      group.add(cyl(0.12, 0.1, 0.08, 14, material, [x, y + postHeight + 0.04, side]));
      group.add(cyl(0.095, 0.11, 0.12, 14, material, [x, y + postHeight + 0.14, side]));
    });
  }

  function addStraightRails(group, length, y, z, material, postCount) {
    const count = postCount || 7;
    group.add(box(length, 0.12, 0.09, material, [0, y + 0.64, z]));
    group.add(box(length, 0.1, 0.08, material, [0, y + 0.3, z]));
    for (let i = 0; i < count; i += 1) {
      const x = -length / 2 + (length * i) / (count - 1);
      group.add(cyl(0.06, 0.07, 0.76, 12, material, [x, y + 0.38, z]));
    }
  }

  function addCurvedRail(group, z, material) {
    const points = [];
    for (let i = 0; i <= 34; i += 1) {
      const x = -3.55 + (7.1 * i) / 34;
      points.push(new THREE.Vector3(x, yOnArch(x, 2.18, 0.46, 3.55) + 0.56, z));
    }
    const upper = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 56, 0.055, 8, false),
      material
    );
    group.add(setShadow(upper));

    const lowerPoints = points.map((point) => new THREE.Vector3(point.x, point.y - 0.32, point.z));
    const lower = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lowerPoints), 56, 0.04, 8, false),
      material
    );
    group.add(setShadow(lower));
  }

  function addApproachStairs(group, side, material, lightMaterial) {
    const stepCount = 9;
    for (let i = 0; i < stepCount; i += 1) {
      const x = side * (3.34 + i * 0.28);
      const y = 0.38 + i * 0.085;
      group.add(box(0.3, 0.09, 1.55, i % 2 ? material : lightMaterial, [x, y, 0]));
    }
    group.add(box(2.65, 0.18, 1.72, material, [side * 4.45, 0.24, 0], [0, 0, side * -0.16]));
    group.add(box(2.75, 0.16, 0.12, material, [side * 4.48, 0.72, 0.92], [0, 0, side * -0.16]));
    group.add(box(2.75, 0.16, 0.12, material, [side * 4.48, 0.72, -0.92], [0, 0, side * -0.16]));
  }

  function makeArchFace(z, material) {
    const outer = new THREE.Shape();
    outer.moveTo(-3.05, 0);
    outer.lineTo(3.05, 0);
    outer.lineTo(3.32, 1.65);
    outer.quadraticCurveTo(0, 2.38, -3.32, 1.65);
    outer.lineTo(-3.05, 0);

    const opening = new THREE.Path();
    opening.moveTo(-1.92, 0.08);
    for (let i = 0; i <= 36; i += 1) {
      const theta = Math.PI - (Math.PI * i) / 36;
      const x = Math.cos(theta) * 1.92;
      const y = Math.sin(theta) * 1.28 + 0.08;
      opening.lineTo(x, y);
    }
    opening.lineTo(1.92, 0.08);
    opening.lineTo(-1.92, 0.08);
    outer.holes.push(opening);

    const mesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(outer, { depth: 0.16, bevelEnabled: false }),
      material
    );
    mesh.position.z = z;
    mesh.position.y = 0.02;
    return setShadow(mesh);
  }

  /** 石拱桥 */
  function buildArchBridge() {
    const g = new THREE.Group();
    const stone = stoneMat();
    const light = lightStoneMat();
    const dark = darkStoneMat();

    g.add(makeArchFace(0.82, stone), makeArchFace(-0.98, stone));
    g.add(box(6.55, 0.22, 1.72, stone, [0, 1.84, 0]));
    g.add(box(7.15, 0.12, 1.36, light, [0, 2.0, 0]));

    for (let i = 0; i <= 18; i += 1) {
      const x = -3.22 + (6.44 * i) / 18;
      const y = yOnArch(x, 2.07, 0.43, 3.22);
      g.add(box(0.28, 0.075, 1.3, i % 2 ? stone : light, [x, y, 0]));
    }

    [-1, 1].forEach((side) => addApproachStairs(g, side, stone, light));
    [-0.88, 0.88].forEach((z) => addCurvedRail(g, z, dark));
    [-3.35, -2.18, -1.06, 0, 1.06, 2.18, 3.35].forEach((x) => {
      addPostPair(g, x, yOnArch(x, 2.14, 0.43, 3.45), 0.92, light, 1.05);
    });

    g.add(box(7.35, 0.18, 0.14, dark, [0, 1.67, 0.98]));
    g.add(box(7.35, 0.18, 0.14, dark, [0, 1.67, -0.98]));
    g.add(box(2.0, 0.28, 1.76, stone, [-3.28, 0.24, 0]));
    g.add(box(2.0, 0.28, 1.76, stone, [3.28, 0.24, 0]));

    return g;
  }

  /** 梁式石桥 */
  function buildBeamBridge() {
    const g = new THREE.Group();
    const stone = stoneMat();
    const light = lightStoneMat();
    const dark = darkStoneMat();

    for (let i = -2; i <= 2; i += 1) {
      g.add(box(0.58, 1.05, 1.35, stone, [i * 1.75, 0.54, 0]));
      g.add(box(0.72, 0.18, 1.55, dark, [i * 1.75, 1.15, 0]));
    }
    g.add(box(8.85, 0.24, 1.66, stone, [0, 1.32, 0]));
    for (let i = 0; i < 22; i += 1) {
      g.add(box(0.3, 0.06, 1.36, i % 2 ? stone : light, [-4.05 + i * 0.38, 1.5, 0]));
    }
    [-0.9, 0.9].forEach((z) => addStraightRails(g, 9.1, 1.5, z, light, 9));
    return g;
  }

  /** 铁索桥 */
  function buildSuspensionBridge() {
    const g = new THREE.Group();
    const stone = stoneMat();
    const light = lightStoneMat();
    const dark = darkStoneMat();
    const cable = cableMat();

    [-3.35, 3.35].forEach((x) => {
      g.add(box(0.5, 2.45, 0.44, stone, [x, 1.4, -0.62]));
      g.add(box(0.5, 2.45, 0.44, stone, [x, 1.4, 0.62]));
      g.add(box(0.7, 0.22, 1.58, dark, [x, 2.68, 0]));
      g.add(box(0.95, 0.22, 1.9, stone, [x, 0.18, 0]));
    });

    g.add(box(6.75, 0.16, 1.28, dark, [0, 0.92, 0]));
    for (let i = 0; i < 18; i += 1) {
      g.add(box(0.18, 0.07, 1.18, i % 2 ? stone : light, [-3.1 + i * 0.36, 1.04, 0]));
    }

    function cableAtZ(z) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.7, 2.68, z),
        new THREE.Vector3(-1.65, 1.72, z),
        new THREE.Vector3(0, 1.36, z),
        new THREE.Vector3(1.65, 1.72, z),
        new THREE.Vector3(3.7, 2.68, z),
      ]);
      return setShadow(new THREE.Mesh(new THREE.TubeGeometry(curve, 60, 0.045, 8, false), cable));
    }
    g.add(cableAtZ(0.7), cableAtZ(-0.7));

    [-2.55, -1.75, -0.9, 0, 0.9, 1.75, 2.55].forEach((x) => {
      [-0.7, 0.7].forEach((z) => {
        const topY = 1.38 + 0.12 * Math.abs(x);
        g.add(cyl(0.025, 0.025, Math.max(0.36, topY - 1.04), 8, cable, [x, (topY + 1.04) / 2, z]));
      });
    });
    [-0.82, 0.82].forEach((z) => addStraightRails(g, 6.5, 1.02, z, light, 8));
    return g;
  }

  /** 浮桥 */
  function buildPontoonBridge() {
    const g = new THREE.Group();
    const stone = stoneMat();
    const light = lightStoneMat();
    const dark = darkStoneMat();

    for (let i = -3; i <= 3; i += 1) {
      g.add(box(0.95, 0.34, 1.42, i % 2 ? dark : stone, [i * 1.03, 0.22, 0]));
      g.add(cyl(0.22, 0.22, 1.48, 14, dark, [i * 1.03, 0.24, 0], [Math.PI / 2, 0, 0]));
    }
    g.add(box(7.35, 0.12, 1.24, light, [0, 0.58, 0]));
    for (let i = 0; i < 19; i += 1) {
      g.add(box(0.08, 0.08, 1.34, stone, [-3.35 + i * 0.37, 0.68, 0]));
    }
    [-0.78, 0.78].forEach((z) => addStraightRails(g, 7.15, 0.7, z, light, 8));
    return g;
  }

  /** 廊屋木桥 */
  function buildCoveredBridge() {
    const g = new THREE.Group();
    const stone = stoneMat();
    const light = lightStoneMat();
    const dark = darkStoneMat();

    g.add(box(6.7, 0.18, 1.72, stone, [0, 0.9, 0]));
    [-2.6, -1.3, 0, 1.3, 2.6].forEach((x) => {
      g.add(cyl(0.07, 0.08, 1.18, 12, dark, [x, 1.52, -0.68]));
      g.add(cyl(0.07, 0.08, 1.18, 12, dark, [x, 1.52, 0.68]));
      g.add(box(0.16, 0.72, 0.08, light, [x, 1.52, -0.68]));
      g.add(box(0.16, 0.72, 0.08, light, [x, 1.52, 0.68]));
    });

    g.add(box(6.35, 0.1, 1.48, light, [0, 1.36, 0]));
    g.add(box(6.62, 0.14, 0.24, dark, [0, 2.17, 0], [0, 0, 0.03]));
    g.add(box(6.68, 0.12, 1.08, dark, [0, 2.02, 0.52], [0.34, 0, 0]));
    g.add(box(6.68, 0.12, 1.08, dark, [0, 2.02, -0.52], [-0.34, 0, 0]));
    g.add(box(7.1, 0.12, 0.24, stone, [0, 1.68, 0.86], [0.22, 0, 0]));
    g.add(box(7.1, 0.12, 0.24, stone, [0, 1.68, -0.86], [-0.22, 0, 0]));
    [-0.94, 0.94].forEach((z) => addStraightRails(g, 6.55, 0.96, z, light, 7));
    return g;
  }

  function pickBridgeGroup(typeName) {
    const name = String(typeName || "");
    if (name.includes("廊") || name.includes("风雨")) return buildCoveredBridge();
    if (name.includes("索") || name.includes("悬")) return buildSuspensionBridge();
    if (name.includes("浮") || name.includes("舟")) return buildPontoonBridge();
    if (name.includes("梁") || name.includes("柱")) return buildBeamBridge();
    if (name.includes("拱") || name.includes("闸")) return buildArchBridge();
    return buildArchBridge();
  }

  function disposeObject3D(root) {
    root.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => m.dispose && m.dispose());
      }
    });
  }

  /**
   * @param {HTMLElement} container
   * @param {string} typeName 桥梁类型中文名
   * @returns {() => void}
   */
  function initBridgeType3D(container, typeName) {
    if (!container || !window.THREE || !window.THREE.OrbitControls) {
      if (container && !window.THREE) {
        container.textContent = "无法载入三维引擎，请检查资源路径后重试。";
      }
      return function noop() {};
    }

    const THREE = window.THREE;
    const width = Math.max(container.clientWidth, 280);
    const height = Math.max(container.clientHeight, 200);
    const aspect = width / height;
    const frustumSize = 7.2;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      200
    );
    camera.position.set(6.8, 4.3, 7.8);
    camera.zoom = 0.88;
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    renderer.setClearColor(0xeeeeec, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xf8f8f4, 0x777c78, 1.4);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffffff, 1.05);
    key.position.set(5, 9, 5);
    key.castShadow = true;
    key.shadow.mapSize.width = 1024;
    key.shadow.mapSize.height = 1024;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 30;
    key.shadow.camera.left = -8;
    key.shadow.camera.right = 8;
    key.shadow.camera.top = 8;
    key.shadow.camera.bottom = -8;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xdfe4e1, 0.42);
    rim.position.set(-6, 4, -5);
    scene.add(rim);

    const bridge = pickBridgeGroup(typeName);
    bridge.position.y = 0.02;
    bridge.rotation.y = -0.12;
    scene.add(bridge);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 12),
      new THREE.ShadowMaterial({ color: 0x565a58, opacity: 0.17 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.minZoom = 0.55;
    controls.maxZoom = 1.7;
    controls.maxPolarAngle = Math.PI / 2 - 0.08;
    controls.target.set(0, 1.15, 0);
    controls.update();

    let raf = 0;
    let lastTime = performance.now();
    let lastRenderTime = 0;
    const frameInterval = 1000 / 30;
    const rotationSpeed = 0.18;

    function renderScene() {
      controls.update();
      renderer.render(scene, camera);
    }

    function tick(time) {
      const dt = Math.min(0.05, Math.max(0, (time - lastTime) / 1000 || 0));
      lastTime = time;
      if (!document.hidden) {
        bridge.rotation.y += rotationSpeed * dt;
        if (time - lastRenderTime >= frameInterval) {
          renderScene();
          lastRenderTime = time;
        }
      }
      raf = window.requestAnimationFrame(tick);
    }

    renderScene();
    raf = window.requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      const w = Math.max(container.clientWidth, 200);
      const h = Math.max(container.clientHeight, 180);
      const nextAspect = w / h;
      camera.left = (-frustumSize * nextAspect) / 2;
      camera.right = (frustumSize * nextAspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      renderScene();
    });
    ro.observe(container);

    return function dispose() {
      if (raf) window.cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      disposeObject3D(scene);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }

  window.initBridgeType3D = initBridgeType3D;
})();


```python?code_reference&code_event_index=2
with open("README.md", "w", encoding="utf-8") as f:
    f.write("""# Info Kiosk Tester (IKT)

**Info Kiosk Tester** is a robust, modular web-based auditing and penetration-testing toolkit specifically engineered for evaluating the security posture, stability, and browser sandbox integrity of hardened information kiosks, public terminals, and single-purpose embedded devices (Kiosk Mode / Assigned Access).

---

## 🚀 Key Features

### 1. Authentication & Security Layer
*   **Secure Dashboard Access:** Password protection using SHA-256 password hashing via a clean login overlay, preventing unauthorized users from tampering with admin tools if a kiosk is left unattended.

### 2. Fingerprint & Environment Detection
*   **Browser & Core Identification:** Automatically detects legacy browser engines (Chromium, Trident, MSIE, Gecko, WebKit) and OS fingerprints.
*   **Protocol & Navigation Audit:** Identifies browser characteristics and tests system schema access.

### 3. Sandbox Escape & Exfiltration Tests
*   **Iframe Sandbox Testing:** Evaluates restrictions on nested `<iframe>` elements (testing top-level navigation blocks and parent window object isolation).
*   **File System Access API:** Probes for unauthorized local file system access vectors.
*   **Drag-and-Drop & File Input Exfiltration:** Validates data leakage prevention through drag-and-drop mechanisms or hidden file picker inputs.

### 4. Advanced Stress & Crash Testing Modules (`BrowserCrasher`)
Equipped with dedicated interactive modules to test rendering engine resilience and memory bounds. Each module includes descriptive inline tooltips explaining its specific vector:
*   **Stack Overflow (Recursion):** Triggers infinite recursion without a base case to exhaust the browser's call stack thread.
*   **Massive Array OOM Leak:** Continuously allocates massive arrays to trigger Out-Of-Memory (OOM) conditions.
*   **WebGL / Canvas Stress Loop:** Drives maximum frequency rendering loops via `requestAnimationFrame` to stress the GPU and rendering engine.
*   **Wasm Heap Exhaustion:** Dynamically grows WebAssembly memory (`memory.grow`) to exhaust process heap space.
*   **Infinite Web Worker Spawn:** Spawns background worker threads in an infinite loop to starve CPU and system process resources.
*   **DOM Element Explosion:** Appends hundreds of thousands of elements to the DOM simultaneously to evaluate layout engine lockup limits.
*   **WebSocket Loopback Flood:** Tests networking layers and buffer handling under heavy local flood conditions.
*   **LocalStorage / IndexedDB Flood:** Aggressively writes bulk data until reaching storage quotas (`QuotaExceededError`).

### 5. Network Environment & Security Audits
*   **WebRTC Leak Test:** Discovers real IP addresses behind NAT layers to detect local network visibility.
*   **Localhost Port Scanning:** Attempts local service enumeration on `127.0.0.1` across standard administrative and API ports.

### 6. Logging, Auditing & Reporting
*   **Severity-Based Logging:** Real-time logging categorized by severity (`info`, `warn`, `danger`), with distinct warnings for critical key events (e.g., DevTools access attempts, F11 toggles).
*   **JSON Export:** Instant export of complete audit session logs for compliance and reporting.

---

## 🛠️ Tech Stack
*   **Frontend:** Pure HTML5, modern CSS3 (Variables, Grid, Flexbox), and modular Vanilla JavaScript (ES6+).
*   **Design:** Modern Dark Mode optimized for diagnostic clarity and high-contrast kiosk inspection.

---

## 📦 Project Structure

```text
info-kiosk-tester/
│
├── index.html       # Main control dashboard & modular test views
├── login.js         # SHA-256 authentication logic
├── script.js        # Core penetration testing, sandbox, and crash modules
└── style.css        # UI layout, canvas animations, and theme styles

<h1>🧭 AI-Powered Self-Driving Car Simulation</h1>

This project is a dynamic browser simulation that brings to life how autonomous vehicles learn to drive. Virtual cars equipped with neural networks and sensor systems navigate multi-lane roads, avoiding traffic and boundaries on their own.

---

<h3>🚀 Highlights</h3>

- 🤖 Neural-network-driven cars that learn to steer and avoid obstacles.
- 🚘 Sensor-based environment detection using virtual ray casting.
- 🔄 Evolution through mutation to improve driving strategies over time.
- 🎮 Manual driving mode for testing against the AI.

---

<h3>🛠 How It Works</h3>

- <b>index.html</b>: Sets up the visual canvas and ties everything together.
- <b>style.css</b>: Handles the layout and look of the simulation and controls.
- <b>main.js</b>: Runs the simulation, animates the cars, and manages neural network saving/loading.
- <b>road.js</b>: Draws the roadway, lanes, and curbs.
- <b>car.js</b>: Manages physics, movement, AI decisions, and collisions.
- <b>sensor.js</b>: Implements distance sensors through ray casting.
- <b>network.js</b>: Builds a simple feedforward neural network with mutation.
- <b>controls.js</b>: Lets you drive using your keyboard.
- <b>utils.js</b>: Utility functions for geometry and math.
- <b>visualizer.js</b>: Renders the neural network in real time.

---

<h3>💡 JavaScript Concepts Showcased</h3>

- Object-oriented design using modern ES6 classes.
- Encapsulation with private methods for cleaner structure.
- Canvas API for drawing cars, roads, and sensors.
- requestAnimationFrame for smooth, continuous animations.
- Real-time collision detection via polygon intersections.
- Mutation-driven learning for evolving neural networks.
- Functional programming patterns like map, forEach, reduce.

---

<h3>🧠 Inside the Neural Network</h3>

- Inputs: Sensor distances to obstacles.
- Outputs: Driving decisions — left, right, forward, reverse.
- Architecture: Single hidden layer feedforward network.
- Activation: Simple threshold logic.
- Mutation: Adjusts weights & biases slightly each run to explore better paths.

---

<h3>💾 Saving Progress</h3>

- Store the best-performing car’s brain in your browser’s localStorage to continue training next session.
- Option to discard saved data and start fresh.

---

<h3>🚀 Try It Yourself</h3>

Clone or download the repo, open `index.html` in your browser, and watch the cars teach themselves to drive.  
Take over the wheel manually and see if you can outdrive your AI!

---

<p align="center">Built By Aryan using JavaScript, math, and a passion for AI.</p>


# 🤖 ROS 2 Node.js TypeScript Example

This project demonstrates a simple ROS 2 publisher and subscriber setup using **Node.js** and **TypeScript** via [`rclnodejs`](https://github.com/RobotWebTools/rclnodejs). Great for learning how to bridge JavaScript-based applications with the powerful ROS 2 ecosystem.

---

## 🚀 Getting Started

### 📦 Requirements

- Node.js (v18.x recommended)
- ROS 2 (Humble or supported distro)
- [rclnodejs](https://github.com/RobotWebTools/rclnodejs)

---

### 📁 Project Structure

```
ros2-node-ts/
├── src/
│   ├── publisher.ts      # Publishes String messages to /chatter
│   └── subscriber.ts     # Listens to messages on /chatter
├── tsconfig.json         # TypeScript config
├── package.json          # Project dependencies and scripts
```

---

### ⚙️ Setup

#### 1. Clone and install dependencies

```bash
git clone <repo-url>
cd ros2-node-ts
npm install
```

#### 2. Source ROS 2

Make sure ROS 2 is properly installed and sourced:

```bash
source /opt/ros/humble/setup.bash
```

#### 3. Build TypeScript (optional, for compiled output)

```bash
npm run build
```

---

### 🧪 Run Examples

#### Start Publisher

```bash
npm run start:pub
```

#### Start Subscriber

Open a second terminal:

```bash
npm run start:sub
```

You should see messages being published and received on the `chatter` topic.

---

### 📘 Topic Details

- **Topic Name**: `/chatter`
- **Message Type**: `std_msgs/msg/String`
- **Publisher Node**: `talker_node`
- **Subscriber Node**: `listener_node`

---

### 💡 Bonus

Want to build a ROS 2-powered Express API with real-time robotics control? Extend this base project and add routes to publish/subscribe dynamically!

---

### 🛠️ Dev Scripts

```bash
# Build TS to JS
npm run build

# Run publisher in TS
npm run start:pub

# Run subscriber in TS
npm run start:sub
```

---

### 🧠 Credits

Built with ❤️ by [Aqib Nawab](https://github.com/AQIB-NAWAB)

---

### 📜 License

MIT
```
```
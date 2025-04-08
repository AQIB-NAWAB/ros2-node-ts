import rclnodejs from 'rclnodejs';

rclnodejs.init().then(() => {
  const node = new rclnodejs.Node('ts_publisher');
  const publisher = node.createPublisher('std_msgs/msg/String', 'chatter');

  let count = 0;
  setInterval(() => {
    const msg = { data: `Hello ROS 2 from server ${count++}` };
    publisher.publish(msg);
    console.log(`Published: ${msg.data}`);
  }, 1000);

  rclnodejs.spin(node);
});

import rclnodejs from 'rclnodejs';

rclnodejs.init().then(() => {
  const node = new rclnodejs.Node('ts_subscriber');
  node.createSubscription(
    'std_msgs/msg/String',
    'chatter',
    (msg: any) => {
      console.log(`Received: ${msg.data}`);
    }
  );

  rclnodejs.spin(node);
});

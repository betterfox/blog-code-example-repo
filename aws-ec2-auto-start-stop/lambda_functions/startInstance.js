import { EC2Client, StartInstancesCommand } from '@aws-sdk/client-ec2';

const ec2Client = new EC2Client({ region: 'ap-southeast-7' });

export const handler = async (event) => {
    const command = new StartInstancesCommand({ InstanceIds: [event.instance_id] });
    await ec2Client.send(command);
    return `Started your instance: ${event.instance_id}`;
};
import SimpleRemoteControl from '../src/command/simple-remote-control';
import Light from '../src/command/light';
import LightOnCommand from '../src/command/light-on-command';
import GarageDoor from '../src/command/garage-door';
import GarageDoorOpenCommand from '../src/command/garage-door-open-command';

describe('remote control', () => {
  const remote = new SimpleRemoteControl();
  it('light on', () => {
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    remote.setCommand(lightOn);
    expect(remote.buttonWasPressed()).toBe('Light is on');
  });

  it('garage door open', () => {
    const garageDoor = new GarageDoor();
    const doorOpen = new GarageDoorOpenCommand(garageDoor);
    remote.setCommand(doorOpen);
    expect(remote.buttonWasPressed()).toBe('Garage door is open');
  });
});

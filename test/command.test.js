import SimpleRemoteControl from '../src/command/simple-remote-control';
import Light from '../src/command/light';
import LightOnCommand from '../src/command/light-on-command';
import GarageDoor from '../src/command/garage-door';
import GarageDoorOpenCommand from '../src/command/garage-door-open-command';
import RemoteControl from '../src/command/remote-control';
import CeilingFan from '../src/command/ceiling-fan';
import Stereo from '../src/command/stereo';
import LightOffCommand from '../src/command/light-off-command';
import CeilingFanOnCommand from '../src/command/ceiling-fan-on-command';
import CeilingFanOffCommand from '../src/command/ceiling-fan-off-command';
import StereoOnWithCDCommand from '../src/command/stereo-on-with-cd-command';
import StereoOffCommand from '../src/command/stereo-off-command';
import RemoteControlWithUndo from '../src/command/remote-control-with-undo';
import CeilingFanHighCommand from '../src/command/ceiling-fan-high-command';
import CeilingFanMediumCommand from '../src/command/ceiling-fan-medium-command';
import TV from '../src/command/tv';
import TVOnCommand from '../src/command/tv-on-command';
import TVOffCommand from '../src/command/tv-off-command';
import Hottub from '../src/command/hottub';
import HottubOnCommand from '../src/command/hottub-on-command';
import HottubOffCommand from '../src/command/hottub-off-command';
import MacroCommand from '../src/command/macro-command';

describe('simple remote control', () => {
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

describe('remote control', () => {
  const remoteControl = new RemoteControl();
  const livingRoomLight = new Light('Living Room');
  const kitchenLight = new Light('Kitchen');
  const ceilingFan = new CeilingFan('Living Room');
  const stereo = new Stereo('Living Room');

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenLightOn = new LightOnCommand(kitchenLight);
  const kitchenLightOff = new LightOffCommand(kitchenLight);

  const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
  const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

  const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
  const stereoOff = new StereoOffCommand(stereo);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
  remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
  remoteControl.setCommand(3, stereoOnWithCD, stereoOff);

  it('toString', () => {
    expect(remoteControl.toString()).toBe(`
------ Remote Control ------
[slot 0] LightOnCommand LightOffCommand
[slot 1] LightOnCommand LightOffCommand
[slot 2] CeilingFanOnCommand CeilingFanOffCommand
[slot 3] StereoOnWithCDCommand StereoOffCommand
[slot 4] NoCommand NoCommand
[slot 5] NoCommand NoCommand
[slot 6] NoCommand NoCommand
`);
  });

  it('living room light on', () => {
    expect(remoteControl.onButtonWasPushed(0)).toBe('Living Room light is on');
  });
  it('living room light off', () => {
    expect(remoteControl.offButtonWasPushed(0)).toBe('Living Room light is off');
  });

  it('kitchen light on', () => {
    expect(remoteControl.onButtonWasPushed(1)).toBe('Kitchen light is on');
  });
  it('kitchen light off', () => {
    expect(remoteControl.offButtonWasPushed(1)).toBe('Kitchen light is off');
  });

  it('living room ceiling fan light on', () => {
    expect(remoteControl.onButtonWasPushed(2)).toBe('Living Room ceiling fan is on high');
  });
  it('living room ceiling fan light off', () => {
    expect(remoteControl.offButtonWasPushed(2)).toBe('Living Room ceiling fan is off');
  });

  it('stereo on', () => {
    expect(remoteControl.onButtonWasPushed(3)).toBe('Living Room stereo is on\n'
    + 'Living Room stereo is set for CD input\n'
    + 'Living Room stereo volume set to 11');
  });
  it('stereo off', () => {
    expect(remoteControl.offButtonWasPushed(3)).toBe('Living Room stereo is off');
  });
});

describe('remote control with undo', () => {
  const remoteControl = new RemoteControlWithUndo();
  const livingRoomLight = new Light('Living Room');
  const ceilingFan = new CeilingFan('Living Room');
  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan);
  const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
  const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

  remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff);
  remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);

  it('living room light on', () => {
    expect(remoteControl.onButtonWasPushed(0)).toBe('Living Room light is on');
  });

  it('living room light off', () => {
    expect(remoteControl.offButtonWasPushed(0)).toBe('Living Room light is off');
  });

  it('undo light off', () => {
    expect(remoteControl.undoButtonWasPushed()).toBe('Living Room light is on');
  });

  it('undo light on', () => {
    remoteControl.onButtonWasPushed(0);
    expect(remoteControl.undoButtonWasPushed()).toBe('Living Room light is off');
  });

  it('ceiling fan medium', () => {
    expect(remoteControl.onButtonWasPushed(1)).toBe('Living Room ceiling fan is on medium');
  });

  it('ceiling fan off', () => {
    expect(remoteControl.offButtonWasPushed(1)).toBe('Living Room ceiling fan is off');
  });

  it('undo fan medium', () => {
    expect(remoteControl.undoButtonWasPushed()).toBe('Living Room ceiling fan is on medium');
  });

  it('ceiling fan high', () => {
    expect(remoteControl.onButtonWasPushed(2)).toBe('Living Room ceiling fan is on high');
  });

  it('undo fan high', () => {
    expect(remoteControl.undoButtonWasPushed()).toBe('Living Room ceiling fan is on medium');
  });
});

describe('party mode', () => {
  const remoteControl = new RemoteControlWithUndo();

  const light = new Light('Living Room');
  const tv = new TV('Living Room');
  const stereo = new Stereo('Living Room');
  const hottub = new Hottub();

  const lightOn = new LightOnCommand(light);
  const tvOn = new TVOnCommand(tv);
  const stereoOn = new StereoOnWithCDCommand(stereo);
  const hottubOn = new HottubOnCommand(hottub);

  const lightOff = new LightOffCommand(light);
  const tvOff = new TVOffCommand(tv);
  const stereoOff = new StereoOffCommand(stereo);
  const hottubOff = new HottubOffCommand(hottub);

  const partyOn = [lightOn, tvOn, stereoOn, hottubOn];
  const partyOff = [lightOff, tvOff, stereoOff, hottubOff];

  const partyOnMacro = new MacroCommand(partyOn);
  const partyOffMacro = new MacroCommand(partyOff);

  remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

  it('toString', () => {
    expect(remoteControl.toString()).toBe(`
------ Remote Control ------
[slot 0] MacroCommand MacroCommand
[slot 1] NoCommand NoCommand
[slot 2] NoCommand NoCommand
[slot 3] NoCommand NoCommand
[slot 4] NoCommand NoCommand
[slot 5] NoCommand NoCommand
[slot 6] NoCommand NoCommand
`);
  });

  it('macro on', () => {
    expect(remoteControl.onButtonWasPushed(0)).toBe(`Living Room light is on
Living Room TV is on
Living Room TV channel is set for DVD
Living Room stereo is on
Living Room stereo is set for CD input
Living Room stereo volume set to 11
Hottub is heating to a steaming 104 degrees
Hottub is bubbling
`);
  });

  it('macro off', () => {
    expect(remoteControl.offButtonWasPushed(0)).toBe(`Living Room light is off
Living Room TV is off
Living Room stereo is off
Hottub is cooling to 98 degrees
`);
  });
});

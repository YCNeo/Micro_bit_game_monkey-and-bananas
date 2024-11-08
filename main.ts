let monkeyPosition: number[] = [];
let queue: number[][] = [];
let seed = 0;
let step = 0;
let scoreArr: number[] = [];
let score = 0;
let latency = 0;
let isStart = false;
let popBananas: number[] = [];
let x = 0;
let bright = 0;
input.onButtonPressed(Button.A, function () {
  led.unplot(monkeyPosition[0], monkeyPosition[1]);
  if (monkeyPosition[0] != 0) {
    monkeyPosition[0] = monkeyPosition[0] - 1;
  }
  led.plot(monkeyPosition[0], monkeyPosition[1]);
});
function drop() {
  for (let item of queue) {
    if (item[1] <= 4) {
      led.plotBrightness(item[0], item[1], 0);
      item[1] = item[1] + 1;
      led.plotBrightness(item[0], item[1], item[2]);
    }
  }
}
function judge() {
  seed = 14;
  if (step >= 20 && step < 46) {
    seed = 7;
  } else if (step >= 46) {
    seed = -7;
  }
  for (let item3 of queue) {
    if (item3[0] == monkeyPosition[0] && item3[1] == monkeyPosition[1]) {
      scoreArr = item3;
      score += scoreArr[2] / seed;
    }
  }
  return scoreArr;
}
input.onButtonPressed(Button.AB, function () {
  step = 0;
  latency = 1000;
  monkeyPosition = [2, 4];
  basic.showString("START!");
  isStart = true;
  led.plot(monkeyPosition[0], monkeyPosition[1]);
  while (step <= 73) {
    if (step >= 20) {
      latency = 500;
    }
    drop();
    if (step % 2 == 1) {
      generateBananas();
      popBananas = judge();
    }
    led.plotBrightness(popBananas[0], popBananas[1], 0);
    led.plot(monkeyPosition[0], monkeyPosition[1]);
    basic.pause(latency);
    step += 1;
  }
  basic.clearScreen();
  basic.showString("END");
  basic.showNumber(score);
  basic.clearScreen();
});
input.onButtonPressed(Button.B, function () {
  led.unplot(monkeyPosition[0], monkeyPosition[1]);
  if (monkeyPosition[0] != 4) {
    monkeyPosition[0] = monkeyPosition[0] + 1;
  }
  led.plot(monkeyPosition[0], monkeyPosition[1]);
});
function generateBananas() {
  let y: number;
  for (let index = 0; index < randint(1, 3); index++) {
    y = 0;
    x = randint(0, 4);
    if (randint(0, 100) <= 50) {
      bright = 70;
    } else {
      bright = 140;
    }
    if (isValid(x, y)) {
      led.plotBrightness(x, y, bright);
      queue.insertAt(0, [x, y, bright]);
    }
  }
}
function isValid(x2: number, y2: number) {
  for (let item2 of queue) {
    if (item2[0] == x2 && item2[1] == y2) {
      return false;
    }
  }
  return true;
}
basic.forever(function () {
  if (isStart == true) {
    while (step < 46) {
      if (step < 20) {
        music.setTempo(100);
      } else {
        music.setTempo(160);
      }
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(370, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(440, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(554, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(440, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(370, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(659, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(659, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(659, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(277, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(370, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(440, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(554, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(440, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(370, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(659, music.beat(BeatFraction.Whole)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(659, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(622, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(587, music.beat(BeatFraction.Whole)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Whole));
      music.play(
        music.tonePlayable(494, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(392, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(277, music.beat(BeatFraction.Whole)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(494, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(392, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(277, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(440, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(370, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(262, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(247, music.beat(BeatFraction.Whole)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(349, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(294, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(247, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.play(
        music.tonePlayable(330, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(330, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(330, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Double));
      music.play(
        music.tonePlayable(466, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(494, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(554, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(587, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(740, music.beat(BeatFraction.Quarter)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Quarter));
      music.play(
        music.tonePlayable(880, music.beat(BeatFraction.Whole)),
        music.PlaybackMode.UntilDone
      );
      basic.pause(1000);
    }
    music.stopAllSounds();
    while (step >= 46 && step < 72) {
      music.setTempo(200);
      for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
          music.play(
            music.tonePlayable(523, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(392, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(587, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(392, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(622, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(392, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(587, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
          music.play(
            music.tonePlayable(392, music.beat(BeatFraction.Quarter)),
            music.PlaybackMode.UntilDone
          );
          music.rest(music.beat(BeatFraction.Quarter));
        }
        music.play(
          music.tonePlayable(698, music.beat(BeatFraction.Half)),
          music.PlaybackMode.UntilDone
        );
        music.rest(music.beat(BeatFraction.Half));
        music.play(
          music.tonePlayable(622, music.beat(BeatFraction.Half)),
          music.PlaybackMode.UntilDone
        );
        music.rest(music.beat(BeatFraction.Half));
        music.play(
          music.tonePlayable(587, music.beat(BeatFraction.Double)),
          music.PlaybackMode.UntilDone
        );
        music.rest(music.beat(BeatFraction.Half));
      }
      music.play(
        music.tonePlayable(494, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(523, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(784, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(740, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(784, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(831, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(784, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(740, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(784, music.beat(BeatFraction.Half)),
        music.PlaybackMode.UntilDone
      );
      music.rest(music.beat(BeatFraction.Half));
      music.play(
        music.tonePlayable(523, music.beat(BeatFraction.Double)),
        music.PlaybackMode.UntilDone
      );
    }
    music.stopAllSounds();
  }
});

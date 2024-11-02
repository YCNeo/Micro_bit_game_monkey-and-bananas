monkeyPosition: List[number] = []
queue: List[List[number]] = []
seed = 0
step = 0
scoreArr: List[number] = []
score = 0
latency = 0
isStart = False
popBananas: List[number] = []
x = 0
bright = 0

def on_button_pressed_a():
    led.unplot(monkeyPosition[0], monkeyPosition[1])
    if monkeyPosition[0] != 0:
        monkeyPosition[0] = monkeyPosition[0] - 1
    led.plot(monkeyPosition[0], monkeyPosition[1])
input.on_button_pressed(Button.A, on_button_pressed_a)

def drop():
    for item in queue:
        if item[1] <= 4:
            led.plot_brightness(item[0], item[1], 0)
            item[1] = item[1] + 1
            led.plot_brightness(item[0], item[1], item[2])
def judge():
    global seed, scoreArr, score
    seed = 14
    if step >= 20 and step < 46:
        seed = 7
    elif step >= 46:
        seed = -7
    for item3 in queue:
        if item3[0] == monkeyPosition[0] and item3[1] == monkeyPosition[1]:
            scoreArr = item3
            score += scoreArr[2] / seed
    return scoreArr

def on_button_pressed_ab():
    global step, latency, monkeyPosition, isStart, popBananas
    step = 0
    latency = 1000
    monkeyPosition = [2, 4]
    basic.show_string("START!")
    isStart = True
    led.plot(monkeyPosition[0], monkeyPosition[1])
    while step <= 73:
        if step >= 20:
            latency = 500
        drop()
        if step % 2 == 1:
            generateBananas()
            popBananas = judge()
        led.plot_brightness(popBananas[0], popBananas[1], 0)
        led.plot(monkeyPosition[0], monkeyPosition[1])
        basic.pause(latency)
        step += 1
    basic.clear_screen()
    basic.show_string("END")
    basic.show_number(score)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    led.unplot(monkeyPosition[0], monkeyPosition[1])
    if monkeyPosition[0] != 4:
        monkeyPosition[0] = monkeyPosition[0] + 1
    led.plot(monkeyPosition[0], monkeyPosition[1])
input.on_button_pressed(Button.B, on_button_pressed_b)

def generateBananas():
    global x, bright
    for index in range(randint(1, 3)):
        y = 0
        x = randint(0, 4)
        if randint(0, 100) <= 50:
            bright = 70
        else:
            bright = 140
        if isValid(x, y):
            led.plot_brightness(x, y, bright)
            queue.insert_at(0, [x, y, bright])
def isValid(x2: number, y2: number):
    for item2 in queue:
        if item2[0] == x2 and item2[1] == y2:
            return False
    return True

def on_forever():
    if isStart == True:
        while step < 46:
            if step < 20:
                music.set_tempo(100)
            else:
                music.set_tempo(160)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(370, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(554, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(370, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(294, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(294, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(659, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(659, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(277, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(370, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(554, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(370, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(622, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(587, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.WHOLE))
            music.play(music.tone_playable(494, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(277, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(494, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(392, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(277, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(440, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(370, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(247, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(349, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(247, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.play(music.tone_playable(330, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(330, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.DOUBLE))
            music.play(music.tone_playable(466, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(494, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(554, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(587, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(740, music.beat(BeatFraction.QUARTER)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.QUARTER))
            music.play(music.tone_playable(880, music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            basic.pause(1000)
        music.stop_all_sounds()
        while step >= 46 and step < 72:
            music.set_tempo(200)
            for index2 in range(2):
                for index3 in range(3):
                    music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(587, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(622, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(587, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                    music.play(music.tone_playable(392, music.beat(BeatFraction.QUARTER)),
                        music.PlaybackMode.UNTIL_DONE)
                    music.rest(music.beat(BeatFraction.QUARTER))
                music.play(music.tone_playable(698, music.beat(BeatFraction.HALF)),
                    music.PlaybackMode.UNTIL_DONE)
                music.rest(music.beat(BeatFraction.HALF))
                music.play(music.tone_playable(622, music.beat(BeatFraction.HALF)),
                    music.PlaybackMode.UNTIL_DONE)
                music.rest(music.beat(BeatFraction.HALF))
                music.play(music.tone_playable(587, music.beat(BeatFraction.DOUBLE)),
                    music.PlaybackMode.UNTIL_DONE)
                music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(494, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(784, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(740, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(784, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(831, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(784, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(740, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(784, music.beat(BeatFraction.HALF)),
                music.PlaybackMode.UNTIL_DONE)
            music.rest(music.beat(BeatFraction.HALF))
            music.play(music.tone_playable(523, music.beat(BeatFraction.DOUBLE)),
                music.PlaybackMode.UNTIL_DONE)
        music.stop_all_sounds()
basic.forever(on_forever)

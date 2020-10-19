input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    chance = 3
    basic.showNumber(chance)
    while (chance > 0) {
    	
    }
})
let chance = 0
basic.showIcon(IconNames.Heart)

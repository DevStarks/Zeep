// the number following the note name corresponds to the relative octave of the key
const KEYMAP = {
  'C1':  65,
  'C#1': 87,
  'D1':  83,
  'D#1': 69,
  'E1':  68,
  'F1':  70,
  'F#1': 84,
  'G1':  71,
  'G#1': 89,
  'A1':  72,
  'A#1': 85,
  'B1':  74,
  'C2':  75,
  'C#2': 79,
  'D2':  76,
  'D#2': 80,
  'E2':  186,
  'F2':  222,
};

const keys = {};

function keybind(note, trigger, release) {
  const code = KEYMAP[note];

  document.addEventListener('keydown', e => onKeyDown(code, trigger, e));
  document.addEventListener('keyup', e => onKeyUp(code, release, e));
}

function onKeyDown(code, cb, e) {
  const keyCode = e.which || e.keyCode;
  const notAlreadyPlaying = !keys[keyCode];

  if(keyCode === code && notAlreadyPlaying){
    keys[keyCode] = true;
    cb();
  }
}

function onKeyUp(code, cb, e) {
  const keyCode = e.which || e.keyCode;
  const alreadyPlaying = keys[keyCode];

  if(keyCode === code && alreadyPlaying){
    keys[keyCode] = false;
    cb();
  }
}

export default keybind;

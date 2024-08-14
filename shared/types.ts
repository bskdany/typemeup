export interface KeyStatistic {
  key: string,
  totalHitCount: number,
  correctHitCount: number,
  timeToPress: number, // this is only incremented when the keypress is correct
  accuracy: number,
  wpm: number,
  score: number,
}

export interface KeypressData {
  fingerNumber: number;
  targetKey: string,
  pressedKey: string,
  isCorrect: boolean;
  position: number;
  timeSinceLastKeypress: number;
}
import PopAudio from "@/assets/audio/pop.mp3";

export function playPopAudio() {
  const audio = new Audio(PopAudio);
  audio.play();
}

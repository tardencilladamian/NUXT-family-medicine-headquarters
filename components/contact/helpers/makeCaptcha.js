export default function makeCaptcha() {
  let randomNum = Math.random() * (9999 - 1111) + 1111
  return Math.round(randomNum)
}

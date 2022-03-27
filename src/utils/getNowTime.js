export default function getNowTime() {
  let today = new Date();
  return `${today.toISOString().split("T")[0]} ${today.toLocaleTimeString()}`;
}

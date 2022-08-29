console.log("this should not run")
export let ga = () => {
  console.log("ga has called")
}
export const tho = () => {
  ga()
}
// console.log(tho)

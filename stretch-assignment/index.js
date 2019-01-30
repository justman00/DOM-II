let leader = 0;
const arr = [0, 0, 0, 0, 0];
const blocks = Array.from(document.querySelectorAll(".block"));

console.log(blocks);
blocks.forEach((block, i) => {
  block.addEventListener("click", e => {
    e.target.style.order = leader - 1;
    arr[i] += 100;
    TweenMax.to(e.target, 0.2, {
      x: arr[i]
    });
    leader = e.target.style.order;
    console.log(leader);
  });
});

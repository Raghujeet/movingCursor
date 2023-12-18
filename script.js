window.addEventListener("mousemove", function (detailsX) {
  let rect = document.querySelector("#rect");

  let cursorForX = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
    detailsX.x
  );


  console.log(detailsX);

//   let cursorForY = gsap.utils.mapRange(
//     0,
//     window.innerWidth,
//     150 + rect.getBoundingClientRect().width / 2,
//     window.innerWidth - (150 + rect.getBoundingClientRect().width / 2),
//     detailsY
//   );

  gsap.to("#rect", {
    left: cursorForX,
  });
});

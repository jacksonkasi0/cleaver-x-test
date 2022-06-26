const mousecursor = () => {
  const cursorInner = document.querySelector(".cursor-inner"),
    cursorOuter = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  window.onmousemove = function (s) {
    return (
      o ||
        (cursorOuter.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (cursorInner.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX)
    );
  };
  if (document.querySelector(".cursor-pointer")) {
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseenter", function () {
        return (
          cursorInner.classList.add("cursor-hover"),
          cursorOuter.classList.add("cursor-hover")
        );
      });
    return (
      document
        .querySelector(".cursor-pointer")
        .addEventListener("mouseleave", function () {
          return (
            cursorInner.classList.remove("cursor-hover"),
            cursorOuter.classList.remove("cursor-hover")
          );
        }),
      (cursorInner.style.visibility = "visible"),
      (cursorOuter.style.visibility = "visible")
    );
  }

  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      return (
        cursorInner.classList.add("cursor-hover"),
        cursorOuter.classList.add("cursor-hover")
      );
    });
  });
  return (
    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseleave", function () {
        return (
          cursorInner.classList.remove("cursor-hover"),
          cursorOuter.classList.remove("cursor-hover")
        );
      });
    }),
    (cursorInner.style.visibility = "visible"),
    (cursorOuter.style.visibility = "visible")
  );
};
export { mousecursor };

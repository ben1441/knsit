type ScrollIntoViewOptionsWithDuration = ScrollIntoViewOptions & {
  duration: number;
};

const Scroll = (to: string): any => {
  const options: ScrollIntoViewOptionsWithDuration = {
    behavior: "smooth",
    duration: 2000,
    block: "start",
    inline: "nearest",
  };
  const element = document.getElementById(to);
  element?.scrollIntoView(options);
};

export default Scroll;

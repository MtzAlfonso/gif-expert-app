export const getAnimation = () => {
  const animations = [
    'animate__fadeInDown',
    'animate__fadeInDownBig',
    'animate__fadeInUp',
    'animate__fadeInUpBig',
    'animate__fadeInLeft',
    'animate__fadeInLeftBig',
    'animate__fadeInRight',
    'animate__fadeInRightBig',
    'animate__fadeInBottomRight',
    'animate__fadeInBottomLeft',
    'animate__fadeInTopRight',
    'animate__fadeInTopLeft',
  ];

  return animations[Math.floor(Math.random() * animations.length)];
};

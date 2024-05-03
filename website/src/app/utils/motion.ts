export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 , scale : 3},
      visible: {
        x: -70,        
        opacity: 1,
        scale : 3 ,
        transition: {
          delay: delay,
          duration: 0.8,
        },
      },
    };
  }

  
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 , scale : 3},
      visible: {
        x: -350,
        opacity: 1,
        scale : 3,
        transition: {
          delay: delay,
          duration: 0.8,
        },
      },
    };
  }

  export function onRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 , scale : 3},
      visible: {
        x: -350,
        opacity: 1,
        scale : 3,
        transition: {
          delay: delay,
          duration: 0.8,
        },
      },
    };
  }

  export function onLeft(delay: number) {
    return {
      hidden: { x: -300, y : -10 , opacity: 0 , scale : 3},
      visible: {
        x: -300,
        y : 100,
        opacity: 1,
        scale : 3,
        transition: {
          delay: delay,
          duration: 1.3,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: -80,
      x : 270 ,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  export const onspot = {
    hidden: { y: -50 , x : 270 ,  opacity: 0 },
    visible: {
      y: -40,
      x : 260 ,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

 
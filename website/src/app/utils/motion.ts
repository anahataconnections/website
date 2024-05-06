export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -500, opacity: 0 , scale : 4.4},
      visible: {
        x: -40,        
        opacity: 1,
        scale : 5 ,
        transition: {
          delay: delay,
          duration: 2,
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 , scale : 4.5},
      visible: {
        x: -240,
        opacity: 1,
        scale : 5 ,
        transition: {
          delay: delay,
          duration: 2,
        },
      },
    };
  }

  export function onRight(delay: number) {
    return {
      hidden: { x: -5, y:-5 , opacity: 0 , scale : 2},
      visible: {
        x: -30 ,
        y: 30 ,
        opacity: 1 ,
        scale : 3.3,
        transition: {
          delay: delay,
          duration: 1.3,
        },
      },
    };
  }

  export function onLeft(delay: number) {
    return {
      hidden: { x: -160, y : 300 , opacity: 0 , scale : 2},
      visible: {
        x: -150,
        y : 305,
        opacity: 1 ,
        scale : 3.3,
        transition: {
          delay: delay,
          duration: 1.3,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100 , opacity: 0 },
    visible: {
      y: -70 ,
      x : 300 ,
      opacity: 1 ,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  export const onspot = {
    hidden: { y: -80 , x : 200 ,  opacity: 1 },
    visible: {
      y: -80 ,
      x : 200 ,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

 
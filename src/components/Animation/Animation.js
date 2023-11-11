export const textAnimation = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };


export const rightAnimation = {
    hidden: {
      x: 1000,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  export const bottomAnimation = {
    hidden: {
      y: 1000,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };


  export const topAnimation = {
    hidden: {
      y: 90,
      opacity: 0,
    },
  
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

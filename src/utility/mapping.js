export const fontSizeValues = {
  "xs": "0.5rem",
  "sm": "1rem",
  "md": "1.5rem",
  "lg": "2rem",
  "xl": "2.5rem"
};

export const paddingSizeValues = {
  "xs": "0.5rem",
  "sm": "1rem",
  "md": "1.5rem",
  "lg": "2rem",
  "xl": "2.5rem" 
}



export const getJustifyContentValue = (value) => {
    // jcValue will hold a possible value of flexbox's justify-content
    let jcValue;
  
    switch (value) {
      case 'center':
        jcValue = 'center';
        break;
      case 'start':
        jcValue = 'start';
        break;
      case 'end':
        jcValue = 'end';
        break;
      case 'flex-start':
        jcValue = 'flex-start';
        break;
      case 'flex-end':
        jcValue = 'flex-end';
        break;
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'normal':
        jcValue = 'normal';
        break;
      case 'space-between':
        jcValue = 'space-between';
        break;
      case 'space-around':
        jcValue = 'space-around';
        break;
      case 'space-evenly':
        jcValue = 'space-evenly';
        break;
      case 'stretch':
        jcValue = 'stretch';
        break;
      default:
        jcValue = 'initial';
        break;
    }
  
    return jcValue;
  };
  
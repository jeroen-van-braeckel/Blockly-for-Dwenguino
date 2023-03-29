export {TypesEnum}
/**
 * The supported robot component types
 * @readonly
 * @enum {string}
 */
const TypesEnum = {
    SERVO: 'servo',
    CONTINUOUSSERVO: 'continuousservo',
    LED: 'led',
    RGBLED: 'rgbled',
    LEDMATRIX: 'ledmatrix',
    LEDMATRIXSEGMENT: 'ledmatrixsegment',
    TOUCH: 'touch',
    PIR: 'pir',
    SONAR: 'sonar',
    LCD: 'lcd',
    SOUND: 'sound',
    LIGHT: 'light',
    BUTTON: 'button',
    BUZZER: 'buzzer',
  };
  Object.freeze(TypesEnum);
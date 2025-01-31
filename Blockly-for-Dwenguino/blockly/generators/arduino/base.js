/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.base');

goog.require('Blockly.Arduino');


Blockly.Arduino.dwenguino_delay = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.base_map = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
  var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'map(' + value_num + ', 0, 1024, 0, ' + value_dmax + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.inout_buildin_led = function() {
  var value_state = Blockly.Arduino.valueToCode(this, "STATE", Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
  let code = 'pinMode(13, OUTPUT);\n'
  code += 'digitalWrite(13, ' + value_state + ');\n'
  return code;
};

Blockly.Arduino.inout_digital_write = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  //Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  let code = 'pinMode(' + dropdown_pin + ', OUTPUT);\n'
  code += 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n'
  return code;
};

Blockly.Arduino.inout_digital_write_pin = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  console.log(value_pin);
  var value_state = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output_' + value_pin] = 'pinMode(' + value_pin + ', OUTPUT);';
  let code = 'pinMode(' + value_pin + ', OUTPUT);\n'
  code += 'digitalWrite(' + value_pin + ', ' + value_state + ');\n'
  return code;
};

Blockly.Arduino.inout_digital_read = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  let code = 'pinMode(' + dropdown_pin + ', INPUT);\n'
  code += 'digitalRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_digital_read_pin = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  console.log(value_pin);
  //Blockly.Arduino.setups_['setup_input_' + value_pin] = 'pinMode(' + value_pin + ', INPUT);';
  let code = 'pinMode(' + value_pin + ', INPUT);\n'
  code += 'digitalRead(' + value_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_write = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  let code = 'pinMode('+dropdown_pin+', OUTPUT);\n'
  code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.inout_analog_write_pin = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogWrite(' + value_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.base_pins_list = function() {
  var dropdown_value = this.getFieldValue('PIN');
  return [dropdown_value, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_read = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  let code = 'pinMode('+dropdown_pin+', INPUT);\n'
  code += 'analogRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_read_pin = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  let code = 'pinMode('+dropdown_pin+', INPUT);\n'
  code += 'analogRead(' + value_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_tone = function() {
  var dropdown_pin = this.getFieldValue("PIN");
  var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  let code = 'pinMode('+dropdown_pin+', OUTPUT);\n'
  code += "tone(" + dropdown_pin + ", " + value_num + ");\n";
  return code;
};

Blockly.Arduino.inout_tone_pin = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  let code = 'pinMode('+value_pin+', OUTPUT);\n'
  code = "tone(" + value_pin + ", " + value_num + ");\n";
  return code;
};

Blockly.Arduino.inout_notone = function() {
  var dropdown_pin = this.getFieldValue("PIN");
  //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  let code = 'pinMode('+dropdown_pin+', OUTPUT);\n'
  code += "noTone(" + dropdown_pin + ");\n";
  return code;
};

Blockly.Arduino.inout_notone_pin = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  let code = 'pinMode('+value_pin+', OUTPUT);\n'
  code += "noTone(" + value_pin + ");\n";
  return code;
};

Blockly.Arduino.inout_highlow = function() {
  // Boolean values HIGH and LOW.
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.servo_move = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

  var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.servo_read_degrees = function() {
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.definitions_['define_servo'] = '#include &lt;Servo.h&gt;\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

  var code = 'servo_' + dropdown_pin + '.read()';
  return code;
};

Blockly.Arduino.serial_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');

  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');';

  var code = 'Serial.println(' + content + ');\n';
  return code;
};

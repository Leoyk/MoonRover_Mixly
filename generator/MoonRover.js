'use strict';


goog.provide('Blockly.Arduino.MoonRoverArduino');
goog.require('Blockly.Arduino');

goog.require('Blockly.JavaScript');



 <!--创建自动运行任务-->

	Blockly.Arduino.create_MoonRover = function(){

		Blockly.Arduino.definitions_['月球车库'] = '#include"MoonRover.h"';
		Blockly.Arduino.setups_['初始化月球车接口'] = '__MoonRoverInit();\n\n';
		var code =  '__MoonRoverCreateTask();\n\nif(__autoFlag == 1){\n '

		return code;
	}
 <!--结束任务创建-->
	Blockly.Arduino.createComplete_MoonRover = function(){

		var code =  '__MoonRoverRun(0,0);\nwhile(__autoFlag){__MoonRoverGetConmmunication();\n__MoonRoverGetTelecomm();\n}\n}\n '

		return code;
	}

 <!--持续时间-->

	Blockly.Arduino.delay_MoonRover = function(){

		var delayTime = Blockly.Arduino.valueToCode(this, 'mrDelayTime',Blockly.Arduino.ORDER_ATOMIC);
		var code =  '__timeFlag = millis();\nwhile((millis() - __timeFlag < (' + delayTime + ')) && __autoFlag){\n__MoonRoverGetConmmunication();\n__MoonRoverGetTelecomm();\n}\n\n'

		return code;
	}

 <!--单电机控制-->

	Blockly.Arduino.motorCtr_MoonRover = function () {
    
	    var Speed = Blockly.Arduino.valueToCode(this, 'mrSpeedSingle', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveDirction = this.getFieldValue('UNIT');
	    var chooseMoveAddress = this.getFieldValue('ADDR');
	    var code = '__MoonRoversingleMotor('+ chooseMoveAddress + ',' + chooseMoveDirction + ',' + Speed + ');\n\n'

    	return code;
};

 <!--单舵机控制-->

	Blockly.Arduino.servoCtr_MoonRover = function () {
    
	    var angle = Blockly.Arduino.valueToCode(this, 'mrAngle', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveAddress = this.getFieldValue('ADDR');
	    var code = '__MoonRoversingleServo('+ chooseMoveAddress + ','  + angle + ');\n\n'

    	return code;
};

 <!--直线运动-->

	Blockly.Arduino.moveDir_MoonRover = function () {
    
	    var Speed = Blockly.Arduino.valueToCode(this, 'mrSpeed', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveDirction = this.getFieldValue('UNIT');
	    var code = '__MoonRoverRun(' + chooseMoveDirction + ',' + Speed + ');\n\n'

    	return code;
};


 <!--停止运动-->

	Blockly.Arduino.stop_MoonRover = function(){

	    var code = '__MoonRoverRun(0,0);\n\n'

		return code;
	}

 <!--原地转向-->

	Blockly.Arduino.turnStill_MoonRover = function () {
    
	    var mrTSpeed = Blockly.Arduino.valueToCode(this, 'mrTurnSpeed', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveDirction = this.getFieldValue('UNIT');
	    var code = '__MoonRoverTurn(' + chooseMoveDirction + ',' + mrTSpeed + ');\n\n'

    	return code;
};

 <!--差速转向-->

	Blockly.Arduino.turnMove_MoonRover = function () {
    
	    var mrTurnDir = this.getFieldValue('UNIT');
	    var mrTSpeedL = Blockly.Arduino.valueToCode(this, 'mrTurnSpeedL', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var mrTSpeedR = Blockly.Arduino.valueToCode(this, 'mrTurnSpeedR', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveDirction = this.getFieldValue('UNIT');
	    var code = '__MoonRoverDricTurn(' + mrTurnDir + ',' + mrTSpeedL + ',' + mrTSpeedR + ');\n\n'

    	return code;
};


 <!--导轮转向-->

	Blockly.Arduino.turnLead_MoonRover = function () {
    
	    var mrLeadDir = this.getFieldValue('UNIT');
	    var mrLeadAngle = Blockly.Arduino.valueToCode(this, 'mrLeadAngle', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var mrLeadSpeed = Blockly.Arduino.valueToCode(this, 'mrLeadSpeed', Blockly.Arduino.ORDER_ATOMIC) || '0'
	    var chooseMoveDirction = this.getFieldValue('UNIT');
	    var code = '__MoonRoverLeadTurn(' + mrLeadDir + ',' + mrLeadAngle + ',' + mrLeadSpeed + ');\n\n'

    	return code;
};


 <!--拍照任务-->

	Blockly.Arduino.takePhoto_MoonRover = function(){

		var code =  '__MoonRoverTakePhoto();\nwhile(__camFlag) __MoonRoverGetConmmunication();\n\n'

		return code;
	}


 <!--自动运行标志-->

	Blockly.Arduino.auto_MoonRover = function(){

		var code =  '(__autoFlag)'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}

 <!--激光测距数值-->

	Blockly.Arduino.distance_MoonRover = function(){

		var code =  '(__MoonRoverGetDistance())'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}


 <!--核心温度值-->

	Blockly.Arduino.temperature_MoonRover = function(){

		var code =  '(__MoonRoverGetTemp())'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}


 <!--电池电压-->

	Blockly.Arduino.batVolt_MoonRover = function(){

		var code =  '(__MoonRoverGetBattaryVolt())'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}


 <!--太阳能板电压-->

	Blockly.Arduino.solarVolt_MoonRover = function(){

		var code =  '(__MoonRoverGetSolarVolt())'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}


 <!--车体真实速度-->

	Blockly.Arduino.realSpeed_MoonRover = function(){

		var code =  '(__MoonRoverGetSpd())'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}

 <!--车体姿态-->


	Blockly.Arduino.motion_MoonRover = function() {
		var mrMot = this.getFieldValue('mrMotion')

		var code = '(__MoonRoverGetMotion(' + mrMot + '))'

		return [code, Blockly.Arduino.ORDER_ATOMIC];
	}


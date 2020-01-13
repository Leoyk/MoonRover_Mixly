'use strict';
goog.provide('Blockly.Blocks.MoonRoverArduino');
goog.require('Blockly.Blocks');  
 
var col_redAlard  = '#EC505D';  
var col_teleGet  = '#344C6C';  
var col_teleCtr  = '#567db0';  
var col_teleCtrSingle  = '#50706c';  


////////////////////////////////////////////////////////////////////系统设置
 
//创建自动运行任务
  Blockly.Blocks.create_MoonRover = {
    init: function() {
      this.setColour(col_redAlard);//模块图形颜色
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.moonRoverCreate)//显示语言定义文件中的字
  
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  }; 

//完成任务创建
  Blockly.Blocks.createComplete_MoonRover = {
    init: function() {
      this.setColour(col_redAlard);//模块图形颜色
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.moonRoverCreateCp)//显示语言定义文件中的字
  
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };

//持续时间
  Blockly.Blocks.delay_MoonRover = {
    init: function() {
      this.setColour(col_redAlard);//模块图形颜色
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.moonRoverDelay)//显示语言定义文件中的字
      this.appendValueInput("mrDelayTime", Number)
          .setCheck(Number);    
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.moonRoverDelayMs)//显示语言定义文件中的字

          
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };


////////////////////////////////////////////////////////////////////运动控制

//单舵机控制
Blockly.Blocks.servoCtr_MoonRover = {
  init: function() {

  var ADDR =
        [[Blockly.leftFront, '1'],
        [Blockly.rightFront, '2'],
        [Blockly.leftBack, '3'],
        [Blockly.rightBack, '4']];

    this.setColour(col_teleCtrSingle);
    this.appendValueInput("mrAngle", Number)
        .appendField(Blockly.servoCtr)
        .appendField(Blockly.servoCtrSingle)
        .appendField(new Blockly.FieldDropdown(ADDR), 'ADDR') 

        .appendField(Blockly.servoCtrAngle)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//单电机控制
Blockly.Blocks.motorCtr_MoonRover = {
  init: function() {
  var UNIT =
        [[Blockly.moveFoward, '1'],
        [Blockly.moveBackeward, '2']];
  var ADDR =
        [[Blockly.leftFront, '1'],
        [Blockly.rightFront, '2'],
        [Blockly.liftMidle, '3'],
        [Blockly.rightMidle, '4'],
        [Blockly.leftBack, '5'],
        [Blockly.rightBack, '6']];

    this.setColour(col_teleCtrSingle);
    this.appendValueInput("mrSpeedSingle", Number)
        .appendField(Blockly.motorCtr)
        .appendField(Blockly.motorCtrSingle)
        .appendField(new Blockly.FieldDropdown(ADDR), 'ADDR') 

        .appendField(Blockly.moonRoverDir)
        .appendField(new Blockly.FieldDropdown(UNIT), 'UNIT')
        .appendField(Blockly.moveSpeed)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//直线运动
Blockly.Blocks.moveDir_MoonRover = {
  init: function() {
  var UNIT =
        [[Blockly.moveFoward, '1'],
        [Blockly.moveBackeward, '2']];
    this.setColour(col_teleCtr);
    this.appendValueInput("mrSpeed", Number)
        .appendField(Blockly.moonRoverRunDir)
        .appendField(new Blockly.FieldDropdown(UNIT), 'UNIT')
        .appendField(Blockly.moveSpeed)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//停止运动
  Blockly.Blocks.stop_MoonRover = {
    init: function() {
      this.setColour(col_teleCtr);//模块图形颜色
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.moonRoverStop)//显示语言定义文件中的字
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };

//原地转向
Blockly.Blocks.turnStill_MoonRover = {
  init: function() {
  var UNIT =
        [[Blockly.turnColockwise, '1'],
        [Blockly.turnAnticlockwise, '2']];
    this.setColour(col_teleCtr);
    this.appendValueInput("mrTurnSpeed", Number)
        .appendField(Blockly.turnStill)
        .appendField(new Blockly.FieldDropdown(UNIT), 'UNIT')
        .appendField(Blockly.moveSpeed)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//差速转向
  Blockly.Blocks.turnMove_MoonRover = {
  init: function() {
  var UNIT =
        [[Blockly.moveFoward, '1'],
        [Blockly.moveBackeward, '2']];
    this.setColour(col_teleCtr);
    this.appendValueInput("mrTurnSpeedL", Number)
        .appendField(Blockly.turnErr)
        .appendField(new Blockly.FieldDropdown(UNIT), 'UNIT')
        .appendField(Blockly.turnSpeedL)
        .setCheck(Number);     

    this.appendValueInput("mrTurnSpeedR", Number)
        .appendField(Blockly.turnSpeedR)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//导轮转向
  Blockly.Blocks.turnLead_MoonRover = {
  init: function() {
  var UNIT =
        [[Blockly.turnFoward, '1'],
        [Blockly.turnBackeward, '2']];
    this.setColour(col_teleCtr);
    this.appendValueInput("mrLeadAngle", Number)
        .appendField(Blockly.turnLead)
        .appendField(new Blockly.FieldDropdown(UNIT), 'UNIT')
        .appendField(Blockly.turnAngle)
        .setCheck(Number);     

    this.appendValueInput("mrLeadSpeed", Number)
        .appendField(Blockly.moveSpeed)
        .setCheck(Number);     

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};

//拍照任务
  Blockly.Blocks.takePhoto_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);//模块图形颜色
      this.appendDummyInput("")//创建模块入口
          .appendTitle(Blockly.takePhoto)//显示语言定义文件中的字
  
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
//////////////////////////////////////////////////////////////////////////////

//是否处于自动运行模式
  Blockly.Blocks.auto_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.moonRoverAuto)

      this.setOutput(true, Number);
    }
  }; 

//激光测距数值
  Blockly.Blocks.distance_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.laserDistance)

      this.setOutput(true, Number);
    }
  };  

//核心温度值
  Blockly.Blocks.temperature_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.McuTemprature)

      this.setOutput(true, Number);
    }
  };  
  
//电池电压
  Blockly.Blocks.batVolt_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.batVolt)

      this.setOutput(true, Number);
    }
  }; 
  
//太阳能板电压
  Blockly.Blocks.solarVolt_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.solarpanalVolt)

      this.setOutput(true, Number);
    }
  }; 
  
//车体真实速度
  Blockly.Blocks.realSpeed_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.realSpeed)

      this.setOutput(true, Number);
    }
  }; 


//车体真实速度
  Blockly.Blocks.realSpeed_MoonRover = {
    init: function() {
      this.setColour(col_teleGet);
      this.appendDummyInput("")
            .appendField(Blockly.realSpeed)

      this.setOutput(true, Number);
    }
  }; 
  

//车体姿态
Blockly.Blocks.motion_MoonRover = {
  init: function() {
    var mrMotion = 
        [[Blockly.yaw, '0'],
        [Blockly.pitch, '1'],
        [Blockly.roll, '2']];

    this.setColour(col_teleGet);

    this.appendDummyInput()
      .appendField(Blockly.motion)
      .appendField(new Blockly.FieldDropdown(mrMotion), 'mrMotion');

    this.setOutput(true, Number);
  }
}












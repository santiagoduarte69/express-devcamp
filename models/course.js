'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "Course no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Course debe ser obligatorio"
        }
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "Course no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Course debe ser obligatorio"
        }
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,validate:{
        isInt:{
          args: true,
          msg: "Las semanas solo deben tener numeros"
        },
        max:{
          args: true,
          msg: "Las semanas solo pueden tener un digito"
        },
        notEmpty:{
          args: true,
          msg: "Course no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Course debe ser obligatorio"
        }
      }
    },
    enroll_cost:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: true,validate:{
        isFloat:{
          args: true,
          msg: "Course debe ser de tipo float"
        },
        notEmpty:{
          args: true,
          msg: "Course no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Course debe ser obligatorio"
        }
      }
    },
    minium_skill:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        isAlpha:{
          args: true,
          msg: "Course solo debe tener letras"
        },
        notEmpty:{
          args: true,
          msg: "Course no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Course debe ser obligatorio"
        }
      }
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Course',
  });
  return Course;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "Name no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "Name debe ser obligatorio"
        }
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "description no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "description debe ser obligatorio"
        }
      }
    },
    website:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "website no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "website debe ser obligatorio"
        }
      }
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,validate:{
        notEmpty:{
          args: true,
          msg: "website no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "website debe ser obligatorio"
        }
      }
    },
    average_rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,validate:{
        isFloat:{
          args: true,
          msg: "average_rating debe ser de tipo float"
        },
        notEmpty:{
          args: true,
          msg: "average_rating no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "average_rating debe ser obligatorio"
        }
      }
    },
    average_cost:{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,validate:{
        isFloat:{
          args: true,
          msg: "average_cost debe ser de tipo float"
        },
        notEmpty:{
          args: true,
          msg: "average_cost no debe estar vacio"
        },
        notNull:{
          args: true,
          msg: "average_cost debe ser obligatorio"
        }
      }
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};
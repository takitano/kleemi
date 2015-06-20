'use strict';
module.exports = function(sequelize, DataTypes) {
  var test = sequelize.define('test', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return test;
};
/*

var Foo = sequelize.define('Foo', {
 // instantiating will automatically set the flag to true if not set
 flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},

 // default values for dates => current time
 myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },

 // setting allowNull to false will add NOT NULL to the column, which means an error will be
 // thrown from the DB when the query is executed if the column is null. If you want to check that a value
 // is not null before querying the DB, look at the validations section below.
 title: { type: Sequelize.STRING, allowNull: false},

 // Creating two objects with the same value will throw an error. The unique property can be either a
 // boolean, or a string. If you provide the same string for multiple columns, they will form a
 // composite unique key.
 someUnique: {type: Sequelize.STRING, unique: true},
 uniqueOne: { type: Sequelize.STRING,  unique: 'compositeIndex'},
 uniqueTwo: { type: Sequelize.INTEGER, unique: 'compositeIndex'}

 // Go on reading for further information about primary keys
 identifier: { type: Sequelize.STRING, primaryKey: true},

 // autoIncrement can be used to create auto_incrementing integer columns
 incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },

 // Comments can be specified for each field for MySQL and PG
 hasComment: { type: Sequelize.INTEGER, comment: "I'm a comment!" },

 // You can specify a custom field name via the "field" attribute:
 fieldWithUnderscores: { type: Sequelize.STRING, field: "field_with_underscores" },

 // It is possible to create foreign keys:
 bar_id: {
   type: Sequelize.INTEGER,

   references: {
     // This is a reference to another model
     model: Bar,

     // This is the column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   }
 }
})


DataTypes.STRING                      // VARCHAR(255)
DataTypes.STRING(1234)                // VARCHAR(1234)
DataTypes.STRING.BINARY               // VARCHAR BINARY
DataTypes.TEXT                        // TEXT

DataTypes.INTEGER                     // INTEGER
DataTypes.BIGINT                      // BIGINT
DataTypes.BIGINT(11)                  // BIGINT(11)

DataTypes.FLOAT                       // FLOAT
DataTypes.FLOAT(11)                   // FLOAT(11)
DataTypes.FLOAT(11, 12)               // FLOAT(11,12)

DataTypes.REAL                        // REAL        PostgreSQL only.
DataTypes.REAL(11)                    // REAL(11)    PostgreSQL only.
DataTypes.REAL(11, 12)                // REAL(11,12) PostgreSQL only.

DataTypes.DOUBLE                      // DOUBLE
DataTypes.DOUBLE(11)                  // DOUBLE(11)
DataTypes.DOUBLE(11, 12)              // DOUBLE(11,12)

DataTypes.DECIMAL                     // DECIMAL
DataTypes.DECIMAL(10, 2)              // DECIMAL(10,2)

DataTypes.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.BOOLEAN                     // TINYINT(1)

DataTypes.ENUM('value 1', 'value 2')  // An ENUM with allowed values 'value 1' and 'value 2'
DataTypes.ARRAY(DataTypes.TEXT)       // Defines an array. PostgreSQL only.

DataTypes.JSON                        // JSON column. PostgreSQL only.
DataTypes.JSONB                       // JSONB column. PostgreSQL only.

DataTypes.BLOB                        // BLOB (bytea for PostgreSQL)
DataTypes.BLOB('tiny')                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)

DataTypes.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: DataTypes.UUIDV1 or DataTypes.UUIDV4 to make DataTypes generate the ids automatically)

DataTypes.INTEGER.UNSIGNED              // INTEGER UNSIGNED
DataTypes.INTEGER(11).UNSIGNED          // INTEGER(11) UNSIGNED
DataTypes.INTEGER(11).ZEROFILL          // INTEGER(11) ZEROFILL
DataTypes.INTEGER(11).ZEROFILL.UNSIGNED // INTEGER(11) UNSIGNED ZEROFILL
DataTypes.INTEGER(11).UNSIGNED.ZEROFILL // INTEGER(11) UNSIGNED ZEROFILL
*/
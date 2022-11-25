const Sequelize = require("sequelize");

//재정의
module.exports = class User extends Sequelize.Model {
  //init : user 필드 자료형 지정, 테이블 관련 설정
  //associate  : 테이블 간의 관계 설정
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.STRING(50),
          primaryKey: true,
        },
        pw: {
          type: Sequelize.STRING(50),
          allowNull: false,
          // null 허용 - true, notNull - false
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        // 테이블에 대한 설정 지정
        sequelize, // init 매개변수
        modelName: "User", // 프로젝트에 사용할 모델의 이름
        tableName: "users", // 실제 데이터베이스 테이블 이름
        charset: "utf8",
      }
    );
  }
  static associate(db) {
    //User / Project
    //db.User.hasMany(db.Project, { foreignkey: "id", sourcekey: "id" }); //1:N
    //db.User.hasOne; //1:1
    //db.User.belongsToMany; // N:M
    //db.Project.belongsto(db.User, { foreignkey: "id", targetkey: "id" }); //1:1
    //db.Project.belongsToMany; //N:M
  }
};

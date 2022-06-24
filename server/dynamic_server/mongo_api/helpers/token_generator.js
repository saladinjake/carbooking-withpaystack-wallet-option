import bcrypt from 'bcrypt';
//import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
export class TokenGenerator {
  static generateToken(data) {
    const token = jwt.sign(data, process.env.SECRET, {
      expiresIn: '48h',
    });
    return token;
  }

  static hashPassword(password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
  }

  static checkIfPasswordMatch(hashedPassword, password) {
    // console.log(bcrypt.compareSync(hashedPassword, password))
    return bcrypt.compareSync(hashedPassword, password);
  }
}

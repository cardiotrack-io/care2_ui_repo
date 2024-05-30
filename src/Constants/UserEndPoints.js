import backEndUrl from "./backEndURL"
const UserApiEndPoints = {
  send_passcode:  backEndUrl  + "/care/login/send",
  validate_passcode:  backEndUrl  + "/care/login/validate",
};

export default UserApiEndPoints;
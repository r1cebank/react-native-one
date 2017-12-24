import Parse from 'parse/react-native';

import Env from '../res/env.json';

Parse.initialize(Env.PARSE_APPID);
Parse.serverURL = Env.PARSE_SERVER;

export default Parse;

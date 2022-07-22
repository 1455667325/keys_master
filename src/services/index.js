import * as login from './login'
import * as sensitivity from './sensitivity'
import * as user from './user'
import * as key from './key'
import * as crawler from './crawler'
import * as fullSearch from './fullSearch'
export default {
  ...sensitivity,
  ...login,
  ...user,
  ...key,
  ...crawler,
  ...fullSearch
}

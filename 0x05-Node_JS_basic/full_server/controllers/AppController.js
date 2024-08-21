/**
 * Contains the miscellaneous route handlers.
 * @author Bezaleel Olakunori <https://github.com/yahyabnoun>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

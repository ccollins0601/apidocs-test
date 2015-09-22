/**
 * @api {get} /rest/metadata/:format/:mode/:study/:event/:form Returns empty printable case report forms
 * @apiVersion 3.7.0
 * @apiName GetCRF
 * @apiGroup Form
 * @apiPermission user
 *
 * @apiDescription Annotated case report forms in XML, JSON, or printable HTML format. Use asterisks in place of OIDs as wildcards
 *
 * @apiParam {String="html","xml","json"} format="html" Requested format. May be 'html', 'xml', or 'json'.
 * @apiParam {String="print","view"} mode="print" Requested format. May be 'print' or 'view'. Set to print if format is html, otherwise view
 * @apiParam {String} study Study or Site OID. Use '*' for all.
 * @apiParam {String} event Study Event Definition OID. Use '*' for all.
 * @apiParam {String} form Case Report Form Version OID. Use '*' for all.
 *
 * @apiExample Example usage - gets all forms in a study:
 * curl -i demo2.eclinicalhosting.com/OpenClinica9/rest/metadata/html/print/S_NCT02438/SE_ABC/F_123
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiSuccessExample {json} Response (json):
 *     HTTP/1.1 200 Success
 *     {
 *       "odm": "study ODM metadata here"
 *     }
 *
 * @apiSuccessExample {xml} Response (xml):
 *     HTTP/1.1 200 Success
 *     {
 *       "odm": "study ODM XML metadata here"
 *     }
 *
 * @apiSuccessExample {html} Response (html):
 *     HTTP/1.1 200 Success
 *     {
 *       "odm": "forms displayed here"
 *     }
 *
 * @apiError NoAccessRight Only authenticated users can access the data.
 * @apiError NotFound   The resource was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() { return; }

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {String} id         The new Users-ID.
 *
 * @apiUse CreateUserError
 */
function postUser() { return; }

/**
 * @api {put} /user/:id Change a new User
 * @apiVersion 0.3.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiUse"
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiUse CreateUserError
 */
function putUser() { return; }

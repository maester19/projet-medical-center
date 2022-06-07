/**
 * @swagger
 * /medical-center/medecin/new:
 *  post:
 *      description: add new Medecin
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: name
 *            in: formData
 *            required: true
 *            description: A name associated with the Medecin.
 *          - name: surname
 *            in: formData
 *            description: A surname associated with the Medecin
 *            required: false
 *          - name: image
 *            in: formData
 *            description: A id of image for a medecin 
 *            required: false
 *          - name: hospital
 *            in: formData
 *            description: A id of hospital of the medecin 
 *            required: false
 * 
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /medical-center/medecins/:
 *  get:
 *      description: get all Medecins
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

 /**
 * @swagger
 * /medical-center/medecin/detail/{medecinID}:
 *  get:
 *      description: get one Medecin
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: medecinID
 *            in: path
 *            description: id of Medecin
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

  /**
 * @swagger
 * /medical-center/medecin/{search}:
 *  get:
 *      description: search for a medecin by name
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: search
 *            in: path
 *            description: name of Medecin to search
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

  /**
 * @swagger
 * /medical-center/medecin/es/{search}:
 *  get:
 *      description: search for a medecin by name
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: search
 *            in: path
 *            description: name of Medecin to search
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

  /**
 * @swagger
 * /medical-center/medecin/{medecinID}:
 *  put:
 *      description: update the Medecin
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: medecinID
 *            in: path
 *            description: id of Medecin to update
 *            required: true
 *          - name: name
 *            in: formData
 *            required: false
 *            description: A name associated with the Medecin.
 *          - name: surname
 *            in: formData
 *            description: A surname associated with the Medecin
 *            required: false
 *          - name: image
 *            in: formData
 *            description: A id of image for a medecin 
 *            required: false
 *          - name: hospital
 *            in: formData
 *            description: A id of hospital of the medecin 
 *            required: false
 *      responses:
 *          '200':
 *              description: A successful response
 */

   /**
 * @swagger
 * /medical-center/medecin/{medecinID}:
 *  delete:
 *      description: delete the Medecin
 *      tags:
 *          - Medecin
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: medecinID
 *            in: path
 *            description: id of Medecin
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */
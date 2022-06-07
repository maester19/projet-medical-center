/**
 * @swagger
 * /labs/v1/address/:
 *  get:
 *      description: get all categories
 *      tags:
 *          - Address
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
 * /labs/v1/address/{addressID}:
 *  get:
 *      description: get all categories
 *      tags:
 *          - Address
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: addressID
 *            in: path
 *            description: id of address
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */


/**
 * @swagger
 * /labs/v1/address/:
 *  post:
 *      description: add new categorie
 *      tags:
 *          - Address
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: type
 *            in: formData
 *            enum : ['PO Boxes','care-of']
 *            required: true
 *          - name: text
 *            in: formData
 *            description: full adress description
 *            required: true
 *          - name: line
 *            in: formData
 *            description: The name of the city, town, village or other community or delivery center.
 *            required: false
 *          - name: city
 *            in: formData
 *            description: The name of the city, town, village or other community or delivery center.
 *            required: true
 *          - name: district
 *            in: formData
 *            description: The name of the administrative area (county).
 *          - name: state
 *            in: formData
 *            description: Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
 *            required: true
 *          - name: postalCode
 *            in: formData
 *            description: A postal code designating a region defined by the postal service.
 *            required: true
 *          - name: country
 *            in: formData
 *            description: ountry - a nation as commonly understood or generally accepted.
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

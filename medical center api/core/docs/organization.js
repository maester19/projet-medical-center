/**
 * @swagger
 * /labs/v1/organization/:
 *  post:
 *      description: add new organization
 *      tags:
 *          - Organization
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            description: api key
 *            required: true
 *          - name: name
 *            in: formData
 *            required: true
 *            description: A name associated with the organization.
 *          - name: alias
 *            in: formData
 *            description: (Separe by ,) A list of alternate names that the organization is known as, or was known as in the past.
 *            required: false
 *          - name: partOf
 *            in: formData
 *            description: The organization of which this organization forms a part.
 *            required: false
 *          - name: address
 *            in: formData
 *            description: (Separe by ,) An address for the organization.
 *            required: false
 *          - name: type
 *            in: formData
 *            description: (Separe by ,) Id of The kind(s) of organization that this is.
 *            required: true
 *          - name: CLIA
 *            in: formData
 *            description: Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *            required: false
 *          - name: NPI
 *            in: formData
 *            description: Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *            required: false
 *          - name: identifier
 *            in: formData
 *            description: (Separe by ,) Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *            required: false
 *      responses:
 *          '200':
 *              description: A successful response
 */



/**
 * @swagger
 * /labs/v1/organization:
 *  get:
 *      description: List existing Labs --> This path support query string
 *      tags:
 *          - Organization
 *      parameters: 
 *          - name: API-Key
 *            in: header
 *            required: true 
 *          - name: partOf
 *            in: query
 *            required: false 
 *          - name: active
 *            in: query
 *            type: boolean
 *            required: false 
 *          - name: CLIA
 *            in: query
 *            required: false 
 *          - name: NPI
 *            in: query
 *            required: false 
 *          - name: select
 *            in: query
 *            description: field in result separe by ,
 *            required: false 
 *          - name: sort
 *            in: query
 *            description: sort field separe by , 
 *            required: false 
 *          - name: page
 *            in: query
 *            type: integer
 *            description: page
 *            required: false
 *          - name: limit
 *            in: query
 *            type: integer
 *            description: limit
 *            required: false
 *      responses:
 *          '200':
 *              description: A successful response
 */
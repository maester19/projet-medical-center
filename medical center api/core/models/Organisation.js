const mongoose = require("mongoose");


//https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
const OrganizationSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: { // A name associated with the organization.
        type: String,
        required: [true, "Please add a code"]
    },
    alias: { // A list of alternate names that the organization is known as, or was known as in the past.
        type: [{ type : String}],
        default: []
    },

    partOf: { // The organization of which this organization forms a part.
        type : String,
        ref: 'Organization',
        default: undefined
    },
    address: { // An address for the organization.
        type: [{ type : String, trim: true, ref: 'Address'}],
        required: [true, "Please add Address"]
    },

    contact: { // Contact for the organization for a certain purpose.
        type: [{ type : String, trim: true, ref: 'Contact' }],
        default: []
    },

    telecom: { // A contact detail for the organization.
        type: [{ type : String, trim: true, ref: 'ContactPoint' }],
        default: []
        // required: [true, "Please add ContactPoint"]
    },

    type: {  // The kind(s) of organization that this is.  // Exmaple: http://hl7.org/fhir/R4/valueset-organization-type.html#expansion
        type: [{ type : String, trim: true, ref: 'Concept' }],
        default: []
    },

    endpoint: {  // Technical endpoints providing access to services operated for the organization.
        type: [{ type : String,trim: true, ref: 'Endpoint' }],
        default: []
    },

    active: { //Whether the organization's record is still in active use.
        type: Boolean,
        default: true
    },

    CLIA: { //Identifier for the organization that is used to identify the organization across multiple disparate systems.
        type : String,
        ref: 'Identifier',
        default: undefined
    },

    NPI: { //Identifier for the organization that is used to identify the organization across multiple disparate systems.
        type : String,
        ref: 'Identifier',
        default: undefined
    },
    identifier: { //Identifier for the organization that is used to identify the organization across multiple disparate systems.
        type: [{ type : String,trim: true, ref: 'Identifier' }],
        required: [true, "Please add Identifier"],
        default: []
    },


    createdAt: { 
        type: Date,
        default: Date.now
    }
}, {_id: false});


module.exports = mongoose.model("Organization", OrganizationSchema);
const {errorSMS} = require("../utils/globals");
const Result =require('../Utils/result')
const advancedResults = (model, populate) => async (req, res, next) => {
    let query = req.query;
  
    // Copy req.query
    const reqQuery = { ...query };
    // Exclude fields with special meaning to mongoose, we can add another thing here
    const removeFields = ["select", "sort", "page", "limit"];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // Create operators($gt, $lt, $lte, $gte, $in)
    ////127.0.0.1:8000/api/v1/posts?ratings[gt]=3 For operator usage
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in|eq|ne)\b/g,
      (match) => `$${match}`
    );
  
    // Finding resource
    query = model.find(JSON.parse(queryStr));
  
    // Add select fields to query if select exists
    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }
    
    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
  
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
  
    if (populate) {
      query.populate(populate);
    }
  
    // Executing query
    const results = await query;
  
    // Pagination results
    const pagination = {};
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.advancedResults = {
      success: true,
      details: errorSMS["200"],
      data: results,
      total: results.length,
      pagination
    };
    next();
  };
  
  module.exports = advancedResults;
  
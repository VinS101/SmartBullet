'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  lat: {
    type: Number,
    default: 0,
    trim: true
  },
  lon: {
    type: Number,
    default: 0,
    trim: true
  },
  address: {
    type: String,
    default: '777 Glades Rd, Boca Raton, FL',
    trim: true
  }
});

mongoose.model('Article', ArticleSchema);

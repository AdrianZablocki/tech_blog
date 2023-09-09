import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'Please add author']
  },
  date: {
    type: Date
  },
  categories: [
    { 
      type: String,
      required: true,
      enum: {
        values: [ 'angular', 'react', 'vue', 'qwik' ],
        message: 'Please select correct category or categories'
      } 
    }
  ],
  title: {
    type: String,
    required: [true, 'Please add title']
  },
  mainContent: {
    type: String,
    required: [true, 'Please add main content']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add image url']
  }
});

export default mongoose.models.Article || mongoose.model('Article', articleSchema);
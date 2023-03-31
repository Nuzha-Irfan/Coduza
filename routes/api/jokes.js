const express = require('express');
const router = express.Router();

const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Joke = require('../../model/Joke'); 

// @route   POST api/joke
// @desc   submit a joke
// @access  Public
router.post(
  '/',
  [
    check('title', 'Enter a Joke title').not().isEmpty(), //route validation
   
    check('body', 'Enter a valid Joke ').not().isEmpty(),
    check('type', 'Enter a valid type ').not().isEmpty(),
   
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const api_key = req.headers["x-api-key"];
    
    const { title,body,type } = req.body;

    try {
      if (api_key === "api_123_xyz_@") {
        // Add new joke to database
         
          let joke = new Joke({
            title,
            body,
            type
          });
  
          await joke.save(); 
  
  
          res.send('joke Added Succesfully');
      } else {
        res.status(401).json({ error: "Invalid API key" });
      }
     
    } catch (err) {
      console.error(err.message);
      
    }
  }
);

// @route   GET api/joke
// @desc   Deliver a joke
// @access  Public

router.get('/:type', async (req, res) => {
    try {
    
        const joke = await Joke.find({ type:req.params.type });
  
        if(!joke) {
            return res.status(404).json({ msg: 'joke not found' });
        }
  
        res.json(joke);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'String') {
            return res.status(404).json({ msg: 'joke not found' });
        }
        res.status(500).send('Server error');
    }
  });


// @route   delete api/joke
// @desc   delete a joke
// @access  Private

  router.delete('/:id',auth ,async (req, res) => {
    try {
      const joke = await Joke.findById(req.params.id);
      if (!joke) {
        return res.status(404).json({ msg: 'joke Not Found' });
      }
  
      await joke.deleteOne();
      res.json({ msg: 'joke Removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



// @route   UPDATE api/joke
// @desc   update a joke
// @access  Private


router.post('/:id', auth,async (req, res) => {
    try {
      console.log(req.body);
      const test3 = await Joke.findByIdAndUpdate(req.params.id, {
        $set: { type: req.body.type },
      });
      
      res.status(200).send('type updated');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });


// @route   GET api/Joke/:id
// @desc    Get Joke by id
// @access  private
router.get('/:id', async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);

    if (!joke) {
      return res.status(404).json({ msg: 'Joke not found' });
    }

    res.json(joke);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'String') {
      return res.status(404).json({ msg: 'joke not found' });
    }
    res.status(500).send('Server error');
  }
});


// @route   GET api/joke
//@desc get all joke details
// @access  Public

router.get('/', async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
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
   
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title,body } = req.body;

    try {
      
     let joke = new Joke({
        title,
        body
      });

      await joke.save(); 


      res.send('joke Added Succesfully');
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



  // @route   delete api/joke
// @desc   delete a joke
// @access  Private


router.put('/:id', auth,async (req, res) => {
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

module.exports = router;
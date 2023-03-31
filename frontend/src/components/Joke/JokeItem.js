import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJoke,updateJokeByID } from '../../actions/joke';
import Swal from 'sweetalert2';

const JokeItem = ({ joke:{_id,title,body,type}, deleteJoke,updateJokeByID }) => {
    const [value, SetValue] = useState('');
  
  
    const Delete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          var jokeid = id;
          deleteJoke(jokeid);
          Swal.fire('Deleted!', 'Joke has been deleted.', 'success');
        }
      });
    };
  
    const update = async (id, status) => {
      try {
       
       
        

       await Swal.fire({
          title: 'Select a Joke Type',
          input: 'select',
          inputOptions: {
            '': {
              Wierd: 'Wierd',
              funny: 'Funny',
             
            },
          
          },
          inputPlaceholder: 'Select a Type',
          showCancelButton: true,
          inputValidator: (status) => {
            return new Promise((resolve) => {
              if (status === 'Wierd') {
                updateJokeByID(id,status)
              } else {
                updateJokeByID(id,status)
              }
            })
          }
        })
        
      
      
     
      
      } catch (error) {
        console.log(error)
      }
  
    }
  
    
  
    return (
      <Fragment>

<div class="card-columns ">
   
   <div class= "card bg-dark text-white mx-3 mb-3" key={_id}>
     <div class="card-body">
       <h5 class="card-title">{title}</h5>
       <p class="card-text">{body}</p>
       <small>{type}</small>
     </div>
     <div className="card-footer"> 
       
       <span></span>
       <button class="btn btn-danger mr-2" onClick={()=>update(_id,type)} >  <i className='fas fa-edit'></i></button>
              <button class="btn btn-danger ml-2" onClick={()=>Delete(_id)}>  <i className='fas fa-trash'></i></button>
     </div>
   </div>
   
 </div>
     
    
        
      </Fragment>
    );
  };
  
  JokeItem.propTypes = {
    joke: PropTypes.array.isRequired,
    deleteJoke: PropTypes.func.isRequired,
    updateJokeByID:PropTypes.func.isRequired
  };
  
  export default connect(null, { deleteJoke,updateJokeByID })(JokeItem);
  
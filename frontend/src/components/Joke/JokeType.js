import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const JokeType = props => {
  const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`/deliver/${selectedOption}`);
    }
  return (

    <div class="login-form-bd">
    <div class="form-wrapper">
      <div class="form-container">
        <h1> Discover</h1>
			<form>
				<div class="form-group">
					<h3> Select a Joke Type to View</h3>
              <select
            className="form-control form-control-sm"
          id="options"
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="Wierd">Wierd</option>
          <option value="Funny">Funny</option>
        
        </select>
					
				</div>

				<button type="submit" class="btn btn-primary btn-block login-btn" disabled={selectedOption === ''} onClick={handleSubmit}>View Jokes</button>
			</form>
		</div>
	</div>
</div>
    
  )
}

JokeType.propTypes = {}

export default JokeType
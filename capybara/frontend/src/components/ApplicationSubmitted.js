import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export function AppSubmitted() {
  return (
    <div class="thank">
        <div class="check-icon">
            <i class="bi bi-check-circle"></i>
        </div>
        <h1>Thank you!</h1>
        <h2>Your application has been successfully submitted!</h2>
        <p>We’ll let you know the decision in 1-3 business days.</p>
    
        <div class="btn-block">
            <Link to="/home">
                <button type="button" class="btn btn-primary">Home</button>
            </Link>
        </div>
    </div>
    
  )
}
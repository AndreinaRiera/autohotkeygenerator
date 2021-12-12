import './style.scss';
import React from 'react';

export function Accordion(props) {
    return (
        <div className="accordion" id={props.id}>
            {props.children}
        </div>
    )
}

export function Card(props) { 
    var heading_id     = `heading-${props.numb}-FAQ`;
    var collapse_id    = `collapse-${props.numb}-FAQ`;
    var parent_element = "#accordionFAQ";

    var card_id = props.id ? props.id : "";

    return (
        <div className="card" id={card_id}>
            <div className="card-header color-success-dark" id={heading_id}>
                <h2 className="mb-0">
                    <button 
                        className     = "btn btn-link color-success-dark btn-block text-left collapsed"
                        type          = "button"
                        data-toggle   = "collapse"
                        data-target   = {"#"+collapse_id} aria-expanded = "true"
                        aria-controls = {heading_id}
                    >
                        {props.title}
                        
                        <i className="fas fa-sort-up arrow"></i>
                    </button>
                </h2>
            </div>

            <div 
                id              = {collapse_id}
                className       = "collapse"
                aria-labelledby = {heading_id}
                data-parent     = {parent_element}
            >
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

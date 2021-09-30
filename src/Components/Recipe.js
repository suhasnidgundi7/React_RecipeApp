import React from 'react'
// import './Recipe.scss';
import './Recipe.css';

export default function Recipe({title, image, ingredients, meal_type, calories, total_weight, dish_type, ingredient_lines}) {
    return (
        <> 
            <div className="container">
                <div className="card float-right">
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="d-block w-100" src={image} alt=""/>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-block">
                                <h4 className="card-title"><i className="bi bi-arrow-right-circle-fill"></i>&ensp;{title}</h4>
                                <p>
                                    <div className="card">
                                        <div className="card-header">
                                            <strong>Info</strong>
                                        </div>
                                        <div className="card-body">                                            
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Calories</th>
                                                        <th scope="col">Total Weight</th>
                                                        <th scope="col">Meal Type</th>
                                                        <th scope="col">Dish Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        <tr>
                                                            <th>{Math.round(calories)}</th>
                                                            <td>{Math.round(total_weight)}</td>
                                                            <td>{meal_type}</td>
                                                            <td>{dish_type}</td>
                                                        </tr>                                                    
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="card">
                                                <div className="card-header">
                                                    Ingredients Lines
                                                </div>
                                                <div className="card-body">
                                                    <p className="text-truncate">{ingredient_lines}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>                            
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ReadMoreModal" type="button">Read More</button>
                                </div>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="ReadMoreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


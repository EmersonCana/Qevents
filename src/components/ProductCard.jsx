

export default function RecipeReviewCard(props) {
 

  return (

                
                <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions">
                                            
                                                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" width="96" height="350" alt=""/>
                                              
                                           
                                        </div>
                                    </div>

                                    <div className="card-body bg-light text-center">
                                        <div className="mb-2">
                                            <h6 className="font-weight-semibold mb-2">
                                                <a href="#" className="text-default mb-2" data-abc="true">{props.details.productName}</a>
                                            </h6>

                                            <a href="#" className="text-muted" data-abc="true">Laptops & Notebooks</a>
                                        </div>

                                        <h3 className="mb-0 font-weight-semibold">{props.details.Price}</h3>

                                        <div>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                           <i className="fa fa-star star"></i>
                                        </div>

                                        <div className="text-muted mb-3">34 reviews</div>

                                        <button type="button" className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>

                                        
                                    </div>
                                </div>



  );
}
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action'
import { Link } from 'react-router-dom'
class Home extends Component {

    componentDidMount = () => {
        this.props.onGetFood();
    }

    render() {
        
        console.log(this.props)
        const FoodItems = this.props.reducer.menuItems ? this.props.reducer.menuItems.map((item, index) => {
            return (
                <Link to={`/fooditem/${index}`} key={index}>
                    <div style={foodCss}>
                        <li>{item.recipe.label}</li>
                        <img src={item.recipe.image} style={imgcss}></img>
                        {item.recipe.yield}
                    </div>
                </Link>
            )

        }) : null

        return (
            <div>
                {FoodItems}
            </div>
        )
    }
}
//         return (
//             <div >
//                 <ul>
//                     {
//                         this.props.reducer.menuItems ? this.props.reducer.menuItems.map((recipe, index) => {
//                             return (
//                                 <article onClick={() => { this.props.onPostFood (this.props.id)}}>
//                                     <div key={index} style={recipecss}>
                    
//                                         <li>{recipe.recipe.label}</li>
//                                         <img src={recipe.recipe.image}style={imgcss}></img>
//                                         {recipe.recipe.yield}
//                                     </div>
//                                 </article>)
                            
//                         }) : null

//                     }
//                 </ul>

//             </div>

//         )
//     }
// }
const mapStateToProps = state => {
    console.log(state)
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {

        onGetFood: () => dispatch(actionCreators.fetchFoodAsync()),
        // onPostFood:(id) =>dispatch(actionCreators.createProject ())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);




const foodCss = {   
    borderRadius: "5px",
    boxShadow: "0px 5px 20px rgb(71,71,71)",
    margin:"10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "white",
    alignItems: "center",
    minWidth: "40%"
}
const imgcss = {
    borderRadius: "100%",
    width: "100px",
    hight :"100px"
}
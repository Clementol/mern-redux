 import {Component, useEffect} from 'react' ;
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {getItems, deleteItem} from '../components/actions/itemActions';
import ItemModal from './itemModal';

const DeleteButton = () => {
    const {items} = useSelector(state => state.item)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [])
    return (
        <>
            <ItemModal />
             <ul className="list-group ">
                {items.map(({_id, name}) => {
                    return <li key={_id} className="list-group-item" >
                        <button className="btn btn-danger small"
                        style={{marginRight: '5rem'}}
                        onClick={() => dispatch(deleteItem(_id))}
                        >   
                            Delete
                        </button>
                        {name}</li>
                })}
            </ul>
        </>
    )
}
DeleteButton.propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}
class ShoppingList extends Component {
    
    render() {
       
        return (
            <div className="container">
               <DeleteButton getItems={getItems} deleteItem={deleteItem} />
            </div>
        )
    }
    
}

export default ShoppingList;

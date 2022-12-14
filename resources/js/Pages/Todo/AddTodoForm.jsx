import React, {Fragment, useState} from "react";

const AddTodoForm = ({addTodo})=>
{

 const [todo, setTodo] = useState('');
 const [warning, setWarning] = useState(false);
 const handleInputChange = (e)=>
 {
    setTodo( e.target.value );
 }
 const handleAddTodo = (e) =>
 {
    console.log(todo);
    e.preventDefault();
    if(todo !== '')
    {
        warning && setWarning(false);
        addTodo({ id: "test", todo , status:'created'});
        setTodo('');
    }
    else
    {
        setWarning(true);
    }
 }
 return (
     <Fragment>
         <div className="card col-md-6 mx-auto mt-2">
             <div className="form-group col-md-6 mx-auto m-3">
                 {warning && (
                     <div class="alert alert-danger" role="alert">
                         Please Fill form before submit !
                     </div>
                 )}
                 <label htmlFor="todo">Todo Title</label>
                 <input
                     className="form-control "
                     type="text"
                     name="todo"
                     id="todo"
                     value={todo}
                     onChange={handleInputChange}
                 />
             </div>
             <div className="col-md-2 mx-auto">
                 <button
                     onClick={handleAddTodo}
                     className="btn btn-success p-2 mb-1"
                 >
                     Add
                 </button>
             </div>
         </div>
     </Fragment>
 );
}

export default AddTodoForm;
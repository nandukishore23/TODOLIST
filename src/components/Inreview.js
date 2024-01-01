// import { Link } from 'react-router-dom';
import '../components/Inreview.css';
import '../components/Main.css';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Dot } from 'react-bootstrap-icons';

const AddItemForm = ({ isOpen, onClose, onSave, selectedItem }) => {
  const [name, setName] = useState(selectedItem ? selectedItem.name : '');
  const [startDate, setStartDate] = useState(selectedItem ? selectedItem.startDate : '');
  const [endDate, setEndDate] = useState(selectedItem ? selectedItem.endDate : '');
  const [status, setStatus] = useState(selectedItem ? selectedItem.status : '');

  const handleSave = () => {
    if (!name || !startDate || !endDate || !status) {
      alert('Please fill in all fields');
      return;
    }

    onSave({ name, startDate, endDate, status });

    // Clear the form fields
    setName('');
    setStartDate('');
    setEndDate('');
    setStatus('');

    // Close the popup
    onClose();
  };
  const handleCancel = () => {
    // Clear the form fields
    setName('');
    setStartDate('');
    setEndDate('');
    setStatus('');

    // Close the popup
    onClose();
  };
  return (
    <div className={`popup-form ${isOpen ? 'open' : 'closed'}`}>
      <div className="form-container"style={{ width: '40%' }}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className='ti'>{selectedItem ? 'Edit Item' : 'Add new task'}</div>
        
        <div className="lanainpu">
        <label className='lana'>Name of the Task</label><br/>
        <input className='inpu' style={{width:"100%"}} type="text" placeholder='  Text' value={name} onChange={(e) => setName(e.target.value)} />
         </div>
         <div >
          
          <Container className='stco p-0'>
            <Row>
              <Col>
        <label className='lana'>Start date</label><br/>
        <input type="date"  className="lanadate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </Col>
              <Col>
        <label className='lana'>Deadline</label><br/>
        <input type="date" className='lanadate' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
           </Col>
           </Row>
        </Container>
        </div>
       <div className='lanainpu'>
        <label className='lana' > Status</label><br/>
        <select className='inpu' style={{width:"100%"}} value={status} onChange={(e) => setStatus(e.target.value)}>
        <option  className='i'value="rect"><Dot/>To Do</option>

          <option  className='i'value="rect"><Dot/>In Progress</option>
          <option className='i' value="rect"><Dot/>In Review</option>
          <option className='i' value="rect"><Dot/>Completed</option>
        </select>
        
        </div>
        <div className='side'>
        <button className='canc'onClick={handleCancel}>Cancel</button>
        <button className='save' onClick={handleSave}>{selectedItem ? 'Save Changes' : 'Add'}</button>
      </div> 
      </div>
    </div>
  );
};

const Card = ({ item, onEdit }) => {
  const handleEdit = () => {
    onEdit(item);
  };

  return (
    <div className="card" onClick={handleEdit}>
      <div className='card-name'>{item.name}</div>
      <Container>
        <Row>
          <Col>
      <p>
        <strong className="card-date">Start Date <br/></strong><div className="dt">   {  item.startDate}</div> 
      </p>
      </Col>
      <Col>
      <p>
        <strong className="card-date" >End Date <br/></strong><div className="dt">{item.endDate}</div>
      </p>
      </Col>
      </Row>
      </Container>
      
    </div>
  );
};

const Coc= () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleSaveForm = (formData) => {
    if (selectedItem) {
      // Edit existing item
      const updatedItems = items.map((item) => (item === selectedItem ? formData : item));
      setItems(updatedItems);
      setSelectedItem(null);
    } else {
      // Add new item
      setItems([...items, formData]);
    }

    setIsFormOpen(false); // Close the popup after saving
  };

  const handleEditCard = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  return (
    
    <div>
      {/* <button onClick={handleOpenForm}>Add Me</button> */}
      {/* <div className='todo' ><Dot style={{display:"inline-block", background:"#EBEEFC",}} size={33}/>To Do</div> */}
      <div className='re'> <Dot style={{display:"inline-block", background:"#ECF6FC",}} size={33}/>In Review</div>
      {isFormOpen && (
        <AddItemForm
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedItem(null);
          }}
          onSave={handleSaveForm}
          selectedItem={selectedItem}
        />
      )}


      <div>
        {items.map((item, index) => (
          <Card key={index} item={item} onEdit={handleEditCard} />
        ))}
                    <button onClick={handleOpenForm} className='Addme2' style={{width:'96%'}}> +  Add New </button>

      </div>

     </div>
 
  );
};

export default Coc;

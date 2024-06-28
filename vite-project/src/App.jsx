import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
function App() {
  const [newItem, setNewItem] = useState("");
  const [pname, setPname] = useState("");
  const [items, setItems] = useState([]);
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [by, setBy] = useState("");
  function addItem() {
    if (!newItem) {
      alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
      return;
    }
    if (!pname) {
      alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
      return;
    }
    if (!des) {
      alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
      return;
    }
    if (!price) {
      alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
      return;
    }
    if (!by) {
      alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
      return;
    }
    const item = {
      Uid: Math.floor(Math.random() * 1000),
      value: newItem,
      name: pname,
      description: des,
      cost: price,
      entry: by,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    setPname("");
    setDes("");
    setPrice("");
    setBy("");
  }
  function deleteItem(Uid) {
    const newArray = items.filter((item) => item.Uid !== Uid);
    setItems(newArray);
  }
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Form className="help">
              <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Control
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  type="number"
                  placeholder="Enter Product ID"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPName">
                <Form.Control
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                  type="text"
                  placeholder="Enter Product Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  type="email"
                  placeholder="Enter Product Description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Control
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="Enter Product Cost"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBy">
                <Form.Control
                  value={by}
                  onChange={(e) => setBy(e.target.value)}
                  type="text"
                  placeholder="Delivered By"
                />
              </Form.Group>
              <Button size="sm" variant="dark" onClick={() => addItem()}>
                ADD PRODUCT
              </Button>
            </Form>
          </Col>
          <Col>
            <table className="details">
              <TableHeader />
              {items.map((item) => {
                return (
                  <tr key={item.Uid}>
                    <td className="data">{item.value}</td>
                    <td className="data">{item.name}</td>
                    <td className="data">{item.description}</td>
                    <td className="data">₹{item.cost}</td>
                    <td className="data">{item.entry}</td>
                    <td className="data">
                      <Button
                        variant="dark"
                        className="cancel"
                        onClick={() => deleteItem(item.Uid)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </Col>
        </Row>
      </Container>
      {/* <h2>SHOW FULL DETAILS</h2>
      <table className="standard">
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Cost</th>
          <th>Delivered By</th>
        </tr>
        {items.map((item) => {
          return (
            <tr key={item.Uid}>
              <td className="data">{item.value}</td>
              <td className="data">{item.name}</td>
              <td className="data">{item.description}</td>
              <td className="data">₹{item.cost}</td>
              <td className="data">{item.entry}</td>
              <td className="data"></td>
            </tr>
          );
        })}
      </table> */}
    </>
  );
}

export default App;
// import React from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [newItem, setNewItem] = useState("");
//   const [pname, setPname] = useState("");
//   const [items, setItems] = useState([]);
//   const [des, setDes] = useState("");
//   const [price, setPrice] = useState("");
//   const [by, setBy] = useState("");
//   function addItem() {
//     if (!newItem) {
//       alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
//       return;
//     }
//     if (!pname) {
//       alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
//       return;
//     }
//     if (!des) {
//       alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
//       return;
//     }
//     if (!price) {
//       alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
//       return;
//     }
//     if (!by) {
//       alert("WARNING!!...ENTER ALL DETAILS CORRECTLY");
//       return;
//     }
//     const item = {
//       Uid: Math.floor(Math.random() * 1000),
//       value: newItem,
//       name: pname,
//       description: des,
//       cost: price,
//       entry: by,
//     };
//     setItems((oldList) => [...oldList, item]);
//     setNewItem("");
//     setPname("");
//     setDes("");
//     setPrice("");
//     setBy("");
//   }
//   function deleteItem(Uid) {
//     const newArray = items.filter((item) => item.Uid !== Uid);
//     setItems(newArray);
//   }
//   return (
//     <>
//       <h1>Product Inventory</h1>
//       <input
//         type="number"
//         placeholder="Enter Product ID"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Product Name"
//         value={pname}
//         onChange={(e) => setPname(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Product Description"
//         value={des}
//         onChange={(e) => setDes(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Enter Product Cost"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Entered By"
//         value={by}
//         onChange={(e) => setBy(e.target.value)}
//       />
//       <button onClick={() => addItem()}>addItem</button>
//       <ul>
//         <div className="Format">
//           <h2>Product ID</h2>
//           <h2>Product Name</h2>
//           <h2>Product Description</h2>
//           <h2>Product Cost</h2>
//           <h2>Product Entered By</h2>
//         </div>
//         {items.map((item) => {
//           return (
//             <li className="finally" key={item.Uid}>
//               <h3>{item.value}</h3>
//               <h3>{item.name}</h3>
//               <h3>{item.description}</h3>
//               <h3>{item.cost}</h3>
//               <h3>{item.entry}</h3>
//               <button onClick={() => deleteItem(item.Uid)}>X</button>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;
{
  /* <input
              className="inning"
              type="number"
              placeholder="Enter Product ID"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <input
              type="text"
              className="inning"
              placeholder="Enter Product Name"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            /> */
}
{
  /* <input
              type="text"
              className="inning"
              placeholder="Enter Product Description"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            /> */
}
{
  /* <input
              type="number"
              className="inning"
              placeholder="Enter Product Cost"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              className="inning"
              placeholder="Delivered By"
              value={by}
              onChange={(e) => setBy(e.target.value)}
            /> */
}
{
  /* <ul>
        <div className="Format">
          <h2>Product ID</h2>
          <h2>Product Name</h2>
          <h2>Product Description</h2>
          <h2>Product Cost</h2>
          <h2>Product Entered By</h2>
        </div>
        {items.map((item) => {
          return (
            <li className="finally" key={item.Uid}>
              <h3>{item.value}</h3>
              <h3>{item.name}</h3>
              <h3>{item.description}</h3>
              <h3>{item.cost}</h3>
              <h3>{item.entry}</h3>
              <button onClick={() => deleteItem(item.Uid)}>X</button>
            </li>
          );
        })}
      </ul> */
}

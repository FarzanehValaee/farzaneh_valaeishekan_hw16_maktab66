import React , {useState ,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
export default function Register() {
  const [GetFetch,stateGetFetch]=useState([]);
  useEffect(()=>{
    fetch('/public/JSON/iranstates.json')
    .then((response) => response.json())
    .then((res) => {
    stateGetFetch(res);
    });
  
  },[])
  console.log(GetFetch);
  return (
    <>
    <div className='text-white text-center pt-5'>رایگان ثبت نام کنید</div>
    <Form className='py-5 w-100'>
      <div className='d-flex justify-content-between p-2'>
        <Form.Group className="mb-3 w-100 ms-1" controlId="formBasicFirstname">
        <Form.Control type="text" placeholder="*نام" />
        </Form.Group>
        <Form.Group className="mb-3 w-100 me-1" controlId="formBasicLastname">
        <Form.Control type="text" placeholder="* نام خانوادگی" />
        </Form.Group>
      </div>
      <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="پست الکترونیک" />
      </Form.Group>
      <div className='d-flex justify-content-between'>
      <Form.Group className="mb-3 p-2 w-100">
      <Form.Select>
        <option>دیپلم</option>
        <option>کارشناسی</option>
        <option>کارشناسی ارشد</option>
        <option>دکترا</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 p-2 w-100">
      <Form.Select disabled>
        <option>محل تحصیل</option>
      </Form.Select>
      </Form.Group>
      </div>
      <div className='d-flex justify-content-between'>
      <Form.Group className="mb-3 p-2 w-100">
      <Form.Select>
        <option>Disabled select</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 p-2 w-100">
      <Form.Select>
        <option>Disabled select</option>
      </Form.Select>
      </Form.Group>
      </div>
      <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
        <Form.Control type="password"
         placeholder="کلمه عبور" 
         />
      </Form.Group>
      <Button variant="success" className="byn-lg w-100 p-2 mt-2" type="submit">
        ثبت نام
      </Button>
    </Form>
    </>
  )
}

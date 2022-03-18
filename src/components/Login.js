import React from 'react';
import {Form,Button} from 'react-bootstrap';
export default function Login() {
  return (
     <>
         <div className='text-white text-center pt-5'>خوش آمدید</div>
          <Form className='py-5'>
                    <Form.Group className="mb-3 py-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="پست الکترونیک" />
                    </Form.Group>

                    <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="کلمه عبور" />
                    </Form.Group>
                    <a href="#" className='text-success d-block py-5 text-decoration-none'>فراموش کردید؟</a>
                    
                    <Button variant="success" className="byn-lg w-100" type="submit">
                    ورود
                    </Button>
          </Form>
     </>
  )
}

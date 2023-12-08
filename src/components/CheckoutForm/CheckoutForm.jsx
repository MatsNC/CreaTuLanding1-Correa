import '../../App.css';
import '../CheckoutForm/CheckoutForm.css';
import Swal from 'sweetalert2';
import { useEffect, useState, useContext } from 'react';
import './CheckoutForm.css';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import ImageCards from './assets/tarjetas_img.jpg';
import { Modal, Button, Form } from 'react-bootstrap';

const CheckoutForm = () => {

    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: ''
    });

    // const [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {
    //     email: '',
    //     password: '',
    //     username: ''
    // })

    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     localStorage.setItem("userData", JSON.stringify(userData));
    // }, [userData]);

    // useEffect(() => {
    //     const userData = localStorage.getItem("userData");
    //     if (userData) {
    //         setUserData(JSON.parse(userData));
    //     }
    // }, []);

    useEffect(() => {
        handleShow();
        console.log('Datos del usuario:', userData);
    }, []);

    const borrarUserData = () => {
        setUserData({
            email: '',
            password: '',
            username: ''
        });
    }

    const mostrarError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error en el Log In',
            text: 'Faltan datos de usuario',
        });
        borrarUserData();
        console.log('Datos del usuario:', userData);
        navigate('/cart');
    }

    const logInCancelado = () => {
        Swal.fire({
            icon: "error",
            title: "Log in Cancelado",
        });
        navigate('/cart');
    }

    const confirmaPago = () => {
        Swal.fire(
            'Aviso',
            'Tu compra se realizó correctamente. En un instante recibirás un mail con el detalle de la compra',
            'success'
        ).then((res) => {
            if (res.isConfirmed) {
                clearCart();
                navigate('/');
            }
        })
    }

    const modalPago = () => {
        Swal.fire({
            title: "Pago con Tarjeta de débito/crédito",
            html: `
                  <input id="swal-input1" class="swal2-input" placeholder="Número de tarjeta" name="nro_tarjeta">
                  <input id="swal-input2" class="swal2-input" placeholder="Fecha de Vencimiento" name="fecha_venc">
                  <input id="swal-input3" class="swal2-input" placeholder="Codigo de Seguridad" name="codigo">
                `,
            imageUrl: ImageCards,
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Tarjetas",
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn-black-white',
                cancelButton: 'btn-black-white'
            }
        }).then((res) => {
            if (res.isConfirmed) {
                confirmaPago();
            }
            if (res.dismiss === Swal.DismissReason.cancel || res.dismiss === Swal.DismissReason.backdrop || res.dismiss === Swal.DismissReason.esc) {
                Swal.fire(
                    'Compra rechazada',
                    'Tu compra no se realizó',
                    'error'
                )
                navigate('/cart');
            }
        })
    }

    const handleClose = () => {
        setShow(false);
        logInCancelado();
    }
    const handleShow = () => {
        if (userData.username === '') {
            setShow(true);
        }
        else {
            modalPago();
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = () => {

        console.log('Datos del usuario:', userData);
        console.log('Carrito: ', cart);
        // setUserData({
        //     email: '',
        //     password: '',
        //     username: ''
        // });

        if (userData.username !== '' && userData.password !== '' && userData.email !== '') {
            modalPago();
            //Ver esto despues - hay que generar el order para Firebase con esta data     
        }
        else {
            mostrarError();
        }

        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingresa tu email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de usuario"
                                name="username"
                                value={userData.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default CheckoutForm
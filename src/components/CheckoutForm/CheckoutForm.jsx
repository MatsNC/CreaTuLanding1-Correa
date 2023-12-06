import '../../App.css'
import Swal from 'sweetalert2'
import { useEffect, useState, useContext } from 'react'
import './CheckoutForm.css'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {

    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });

    useEffect(() => {
        mostrarAlerta();
    }, []);

    const mostrarAlerta = async () => {

        const { value: formValues } = await Swal.fire({
            title: "Log In",
            html: `
                  <input id="swal-input1" class="swal2-input" placeholder="Nombre" name="name">
                  <input id="swal-input2" class="swal2-input" placeholder="Email" name="email">
                  <input id="swal-input3" class="swal2-input" placeholder="Password" name="password">
                `,
            confirmButtonText: 'Aceptar',
            focusConfirm: false,
            preConfirm: () => {
                return {
                    name: document.getElementById("swal-input1").value,
                    email: document.getElementById("swal-input2").value,
                    password: document.getElementById("swal-input3").value,
                };
            }
        });

        if (formValues) {
            console.log(formValues);
            Swal.fire({
                title: "Sweet!",
                text: "Modal with a custom image.",
                imageUrl: "https://unsplash.it/400/200",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                confirmButtonText: 'Aceptar',
            }).then((res) => {
                if (res.isConfirmed)
                {
                    clearCart();
                    navigate('/');
                }
            })
        }
    }



    return (
        <div>

        </div>
    )
}

export default CheckoutForm
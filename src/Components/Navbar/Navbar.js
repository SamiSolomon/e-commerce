import React, { useContext, useState } from 'react';
import logo from '../../Assets/logo.png';
import cart_icon from  '../../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='flex flex-row justify-evenly bg-white shadow p-5 text-center gap-28'>
      <div className='flex flex-row text-center gap-4'>
        <img className='w-11' src={logo} alt='logo' />
        <p className='p-2 font-bold text-3xl'>SHOPPER</p>
      </div>
      <ul className='flex flex-row p-3 gap-6'>
        <li onClick={() => setMenu('shop')}>
        <Link to='/'> Shop </Link> {menu === 'shop' ? <hr className='bg-black h-1' /> : <></>}{' '}
        </li>
        <li onClick={() => setMenu('mens')}>
         <Link to='/men'>  Men </Link> {menu === 'mens' ? <hr className='bg-black h-1' /> : <></>}{' '}
        </li>
        <li onClick={() => setMenu('womens')}>
         <Link to='/women'> Women </Link>  {menu === 'womens' ? <hr className='bg-black h-1' /> : <></>}{' '}
        </li>
        <li onClick={() => setMenu('kids')}>
         <Link to='/kids'> Kids</Link> {menu === 'kids' ? <hr className='bg-black h-1' /> : <></>}{' '}
        </li>
      </ul>
      <div className='flex flex-row gap-4'>
       <Link to='/login'> <button className='bg-white border border-slate-900 p-2 rounded-2xl px-3'>Login</button> </Link> 
      <Link to='/cart'> <img src={cart_icon} alt='Cart-icon' /> </Link>
      <div>{ getTotalCartItems() }</div>
      </div>
    </div>
  );
};

export default Navbar;

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Drink from './drink'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <MyNavbar/>
      <Drink/>
      <Footer/>
    </div>
  )
}

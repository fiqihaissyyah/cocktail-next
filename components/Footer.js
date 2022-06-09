import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h6 className='font-bold text-base'>Cocktails Corner{'  '}
            <span className='font-normal text-sm'>&copy; {new Date().getFullYear()} by Fiqih Aissyyah</span></h6>
    </footer>
  )
}

export default Footer
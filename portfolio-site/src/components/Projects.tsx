import styles from './Projects.module.scss'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div className="h-screen"
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    }}>
      Projects: 
    </motion.div>
  )
}

export default Projects

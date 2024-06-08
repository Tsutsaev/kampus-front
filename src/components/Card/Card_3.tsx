import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './styles.module.scss'
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard_3() {
  const Navigate = useNavigate();
  return (
   <div className={s.card}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://grozny-inform.ru/LoadedImages/2020/10/16/5803425.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ГУК
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Виртуальный корпус ГГНТУ
        </Typography>
      </CardContent>
      <CardActions>
      <div onClick={() => Navigate("/panorama")}>
        <Button size="small">Деканат</Button>
      </div>
        <Button size="small">Столовая</Button>
        <Button size="small">Аудитория</Button>
      </CardActions>
    </Card>
   </div>
  );
}



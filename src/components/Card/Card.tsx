import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import s from './styles.module.scss'
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard() {
  const Navigate = useNavigate();
  return (
   <div className={s.card}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://sun9-40.userapi.com/impg/6WK_D33NOpxDxBFlIjPRBKm5_y2VqIv0oQB1dQ/Uxq6JetDcn4.jpg?size=1280x853&quality=95&sign=8713e0c0bb5c36b75799ace3e248fec0&c_uniq_tag=uM9pqTXC_DDjTRBarSKXPFpMKg3QKPwEztIPlLyNbHQ&type=album"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          НГУК
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



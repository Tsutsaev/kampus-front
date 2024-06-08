import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import image from './image/Photo.jpg'

const Panorama = () => {
  return (
    <div className="Panorama">
      <ReactPhotoSphereViewer src={image} height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>
    </div>
  )
}

export default Panorama



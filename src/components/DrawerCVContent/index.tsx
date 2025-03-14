import { Drawer } from "antd";
import CV from "../../assets/pdf/CV_TRAN_HUU_VINH_DEVELOPER.pdf";
type DrawerCVContentProps = {
  onClose: () => void;
  open: boolean;
};

const DrawerCVContent = ({ onClose, open }: DrawerCVContentProps) => {
  return (
    <Drawer title="My CV" onClose={onClose} open={open} size="large">
      <iframe src={CV} title="External Website" width="100%" height="100%" style={{ border: "none" }} />
    </Drawer>
  );
};

export default DrawerCVContent;

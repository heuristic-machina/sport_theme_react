import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <div>
        <Button warning rounded onMouseLeave={handleClick}>
          <GoCloudDownload />
          Sign Up!</Button>
      </div>
      <div>
        <Button success primary rounded  onClick={handleClick}>
          <GoBell />
          Click Me!!</Button>
      </div>
      <div>
        <Button danger  onMouseEnter={handleClick}>Buy Now!</Button>
      </div>
      <div>
        <Button secondary >
          <GoDatabase />
          Submit</Button>
      </div>
      <div>
        <Button secondary >Cancel</Button>
      </div>
    </div>    
  );
}

export default ButtonPage;

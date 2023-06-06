import {Navbar, Hero} from './components';
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <div className="main">
      <GoogleOAuthProvider clientId="280861866428-17boqit12hlfn6o50fnrfo33dn7d4ui2.apps.googleusercontent.com">
        <Navbar />
        <Hero />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App